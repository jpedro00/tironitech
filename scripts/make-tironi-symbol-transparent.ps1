$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$src = "C:\Users\jpfma\.cursor\projects\c-Users-jpfma-Downloads-TIRONITECH\assets\c__Users_jpfma_AppData_Roaming_Cursor_User_workspaceStorage_7f53d0bcd0e7be9333c5b1dc55c3792b_images_ChatGPT_Image_16_de_abr._de_2026__12_22_10-15a8dde1-3dfe-4811-842c-47bc99e1cb43.png"
$dst = "C:\Users\jpfma\Downloads\TIRONITECH\tironitech\public\brand\tironi-symbol.png"

$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

$out = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$visited = New-Object 'System.Boolean[,]' $w, $h
$queue = New-Object 'System.Collections.Generic.Queue[System.Tuple[int,int]]'

function IsBgPixel([System.Drawing.Color] $c) {
  $mx = [Math]::Max([Math]::Max($c.R, $c.G), $c.B)
  $br = ($c.R + $c.G + $c.B) / 3
  return ($mx -lt 45 -and $br -lt 38)
}

# seed flood fill from image borders (remove only background connected to borders)
for ($x = 0; $x -lt $w; $x++) {
  $queue.Enqueue([System.Tuple]::Create([int]$x, [int]0))
  $queue.Enqueue([System.Tuple]::Create([int]$x, [int]($h - 1)))
}
for ($y = 0; $y -lt $h; $y++) {
  $queue.Enqueue([System.Tuple]::Create([int]0, [int]$y))
  $queue.Enqueue([System.Tuple]::Create([int]($w - 1), [int]$y))
}

$isBg = New-Object 'System.Boolean[,]' $w, $h
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
      $nc = [System.Drawing.Color]::FromArgb(0, $c.R, $c.G, $c.B)
    }
    else {
      $nc = [System.Drawing.Color]::FromArgb(255, $c.R, $c.G, $c.B)
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }

    $out.SetPixel($x, $y, $nc)
  }
}

if ($minX -gt $maxX -or $minY -gt $maxY) {
  throw "Failed to detect non-transparent bounds."
}

$pad = 8
$cropX = [Math]::Max(0, $minX - $pad)
$cropY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($w - $cropX, ($maxX - $minX + 1) + $pad * 2)
$cropH = [Math]::Min($h - $cropY, ($maxY - $minY + 1) + $pad * 2)

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$cropped = $out.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bmp.Dispose()
$out.Dispose()

$dir = Split-Path -Parent $dst
if (!(Test-Path $dir)) {
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

$cropped.Save($dst, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

Write-Host "Saved transparent symbol to $dst"

