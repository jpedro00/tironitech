$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function IsBgPixel([System.Drawing.Color] $c) {
  $mx = [Math]::Max([Math]::Max($c.R, $c.G), $c.B)
  $br = ($c.R + $c.G + $c.B) / 3
  # near-black background (tolerant)
  return ($mx -lt 55 -and $br -lt 45)
}

function RemoveBorderBackgroundAndCrop([string] $src, [string] $dst, [int] $pad = 8) {
  if (!(Test-Path $src)) { throw "Source not found: $src" }

  $bmp = [System.Drawing.Bitmap]::FromFile($src)
  $w = $bmp.Width
  $h = $bmp.Height

  $out = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

  $visited = New-Object 'System.Boolean[,]' $w, $h
  $queue = New-Object 'System.Collections.Generic.Queue[System.Tuple[int,int]]'
  $isBg = New-Object 'System.Boolean[,]' $w, $h

  # seed flood fill from borders
  for ($x = 0; $x -lt $w; $x++) {
    $queue.Enqueue([System.Tuple]::Create([int]$x, [int]0))
    $queue.Enqueue([System.Tuple]::Create([int]$x, [int]($h - 1)))
  }
  for ($y = 0; $y -lt $h; $y++) {
    $queue.Enqueue([System.Tuple]::Create([int]0, [int]$y))
    $queue.Enqueue([System.Tuple]::Create([int]($w - 1), [int]$y))
  }

  while ($queue.Count -gt 0) {
    $p = $queue.Dequeue()
    $x = $p.Item1
    $y = $p.Item2
    if ($x -lt 0 -or $x -ge $w -or $y -lt 0 -or $y -ge $h) { continue }
    if ($visited[$x, $y]) { continue }
    $visited[$x, $y] = $true

    $c = $bmp.GetPixel($x, $y)
    if (-not (IsBgPixel $c)) { continue }
    $isBg[$x, $y] = $true

    $queue.Enqueue([System.Tuple]::Create([int]($x + 1), [int]$y))
    $queue.Enqueue([System.Tuple]::Create([int]($x - 1), [int]$y))
    $queue.Enqueue([System.Tuple]::Create([int]$x, [int]($y + 1)))
    $queue.Enqueue([System.Tuple]::Create([int]$x, [int]($y - 1)))
  }

  $minX = $w
  $minY = $h
  $maxX = 0
  $maxY = 0

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $c = $bmp.GetPixel($x, $y)
      if ($isBg[$x, $y]) {
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $c.R, $c.G, $c.B))
      } else {
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B))
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  if ($minX -gt $maxX -or $minY -gt $maxY) { throw "Failed to detect non-background bounds for $src" }

  $cropX = [Math]::Max(0, $minX - $pad)
  $cropY = [Math]::Max(0, $minY - $pad)
  $cropW = [Math]::Min($w - $cropX, ($maxX - $minX + 1) + $pad * 2)
  $cropH = [Math]::Min($h - $cropY, ($maxY - $minY + 1) + $pad * 2)

  $rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
  $cropped = $out.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

  $bmp.Dispose()
  $out.Dispose()

  $dir = Split-Path -Parent $dst
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  $cropped.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
  $cropped.Dispose()
}

function CropDeleteActProToShield([string] $path, [int] $pad = 8) {
  # assumes transparent bg already; find vertical gap between shield and text and crop to left part
  $bmp = [System.Drawing.Bitmap]::FromFile($path)
  $w = $bmp.Width
  $h = $bmp.Height

  $colCounts = New-Object int[] $w

  for ($x = 0; $x -lt $w; $x++) {
    $cnt = 0
    for ($y = 0; $y -lt $h; $y++) {
      $a = $bmp.GetPixel($x, $y).A
      if ($a -gt 10) { $cnt++ }
    }
    $colCounts[$x] = $cnt
  }

  $threshold = [Math]::Max(3, [int]($h * 0.01))
  $start = -1
  for ($x = 0; $x -lt $w; $x++) {
    if ($colCounts[$x] -gt $threshold) { $start = $x; break }
  }
  if ($start -lt 0) { $bmp.Dispose(); throw "Could not find non-transparent region in $path" }

  # scan for a sustained gap after some width
  $minWidth = [int]([Math]::Min([Math]::Max(140, $w * 0.18), $w - 1))
  $gapNeed = 18
  $gapRun = 0
  $cut = -1

  for ($x = $start + $minWidth; $x -lt $w; $x++) {
    if ($colCounts[$x] -le $threshold) { $gapRun++ } else { $gapRun = 0 }
    if ($gapRun -ge $gapNeed) { $cut = $x - $gapNeed + 1; break }
  }

  if ($cut -lt 0) { $bmp.Dispose(); return } # if no gap detected, keep as-is

  $cropX = 0
  $cropY = 0
  $cropW = [Math]::Max(1, $cut + $pad)
  $cropH = $h

  $rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
  $cropped = $bmp.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bmp.Dispose()

  # recrop tight to shield bounds (remove empty transparent columns/rows)
  $w2 = $cropped.Width
  $h2 = $cropped.Height
  $minX = $w2
  $minY = $h2
  $maxX = 0
  $maxY = 0

  for ($y = 0; $y -lt $h2; $y++) {
    for ($x = 0; $x -lt $w2; $x++) {
      if ($cropped.GetPixel($x, $y).A -gt 10) {
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }

  if ($minX -le $maxX -and $minY -le $maxY) {
    $cx = [Math]::Max(0, $minX - $pad)
    $cy = [Math]::Max(0, $minY - $pad)
    $cw = [Math]::Min($w2 - $cx, ($maxX - $minX + 1) + $pad * 2)
    $ch = [Math]::Min($h2 - $cy, ($maxY - $minY + 1) + $pad * 2)
    $rect2 = New-Object System.Drawing.Rectangle $cx, $cy, $cw, $ch
    $final = $cropped.Clone($rect2, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $cropped.Dispose()
    $final.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $final.Dispose()
  } else {
    $cropped.Dispose()
  }
}

$function:RemoveGrayBackgroundAndCrop = {
  param([string] $src, [string] $dst, [int] $pad = 10)
  if (!(Test-Path $src)) { throw "Source not found: $src" }

  $bmp = [System.Drawing.Bitmap]::FromFile($src)
  $w = $bmp.Width
  $h = $bmp.Height
  $out = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

  $minX = $w
  $minY = $h
  $maxX = 0
  $maxY = 0

  for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
      $c = $bmp.GetPixel($x, $y)
      $r = [int]$c.R; $g=[int]$c.G; $b=[int]$c.B
      $mx = [Math]::Max([Math]::Max($r,$g),$b)
      $mn = [Math]::Min([Math]::Min($r,$g),$b)
      $sat = $mx - $mn

      # keep colored/orange pixels and highlights; remove low-saturation gray background
      $keep = ($sat -gt 18) -or ($mx -gt 240)
      if ($keep) {
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
        if ($x -lt $minX) { $minX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -gt $maxY) { $maxY = $y }
      } else {
        $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $r, $g, $b))
      }
    }
  }

  $bmp.Dispose()

  if ($minX -gt $maxX -or $minY -gt $maxY) {
    $out.Dispose()
    throw "Failed to detect non-background bounds for $src"
  }

  $cropX = [Math]::Max(0, $minX - $pad)
  $cropY = [Math]::Max(0, $minY - $pad)
  $cropW = [Math]::Min($w - $cropX, ($maxX - $minX + 1) + $pad * 2)
  $cropH = [Math]::Min($h - $cropY, ($maxY - $minY + 1) + $pad * 2)

  $rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
  $cropped = $out.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $out.Dispose()

  $dir = Split-Path -Parent $dst
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  $cropped.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
  $cropped.Dispose()
}

$root = "C:\Users\jpfma\Downloads\TIRONITECH\tironitech"

$sign = Join-Path $root "public\projects\sign-wallet-logo.png"
$delete = Join-Path $root "public\projects\deleteactpro-logo.png"

Write-Host "Processing Sign Wallet logo..."
& $function:RemoveGrayBackgroundAndCrop -src $sign -dst $sign -pad 12

Write-Host "Processing DeleteActPro logo..."
RemoveBorderBackgroundAndCrop -src $delete -dst $delete -pad 10
CropDeleteActProToShield -path $delete -pad 10

Write-Host "Done."

