import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const text = String(value || "");
  const match = text.match(/^(\d+)(.*)$/);
  if (!match) return { numeric: false, end: 0, suffix: "", text };
  return { numeric: true, end: Number(match[1]), suffix: match[2] || "", text };
}

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CountUpStat({ value, label, className = "" }) {
  const parsed = parseValue(value);
  const [displayValue, setDisplayValue] = useState(parsed.numeric && !prefersReducedMotion() ? "0" : parsed.text);
  const rootRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!parsed.numeric || hasAnimatedRef.current) return undefined;

    const node = rootRef.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => {
        hasAnimatedRef.current = true;
        setDisplayValue(`${parsed.end}${parsed.suffix}`);
      });
      return () => cancelAnimationFrame(frame);
    }

    let animationFrame = 0;
    const duration = 1200;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        observer.disconnect();

        const startTime = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(parsed.end * eased);
          setDisplayValue(`${current}${parsed.suffix}`);

          if (progress < 1) {
            animationFrame = requestAnimationFrame(tick);
          }
        };

        animationFrame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [parsed.end, parsed.numeric, parsed.suffix]);

  return (
    <article ref={rootRef} className={`tt2-count-stat ${className}`.trim()}>
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </article>
  );
}