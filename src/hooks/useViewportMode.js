import { useEffect, useState } from "react";

export function useViewportMode(breakpoint = 767) {
  const getIsMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= breakpoint;
  };

  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const onResize = () => setIsMobile(getIsMobile());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return { isMobile };
}

