import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { LogoMark } from "./layout/Navbar";

const SEEN_KEY = "tironi_intro_seen";
const BRAND = "TironiTech";
const TAGLINE = "Tecnologia com clareza, estrutura e evolução";
const TICKER = ["SOFTWARE SOB MEDIDA", "AUTOMAÇÃO", "IA", "INTEGRAÇÕES", "CLOUD"];

const EASE = [0.22, 1, 0.36, 1];
const EASE_WIPE = [0.76, 0, 0.24, 1];
const FULL_MS = 2800;
const REDUCED_MS = 600;

export default function IntroOverlay() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(SEEN_KEY);
    } catch {
      return false;
    }
  });

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "true");
    } catch {
      // storage bloqueado (modo privado) — segue sem persistir
    }
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(dismiss, reduceMotion ? REDUCED_MS : FULL_MS);
    const onKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", dismiss, { passive: true });
    window.addEventListener("touchmove", dismiss, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchmove", dismiss);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible, reduceMotion, dismiss]);

  const exitTransition = reduceMotion
    ? { opacity: 0, transition: { duration: 0.35 } }
    : { y: "-100%", transition: { duration: 0.75, ease: EASE_WIPE } };

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className="tt2-intro-overlay"
          role="presentation"
          onClick={dismiss}
          initial={{ opacity: 1 }}
          exit={exitTransition}
        >
          <Motion.div
            className="tt2-intro-noise"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
          />

          <Motion.div
            className="tt2-intro-glow tt2-intro-glow-1"
            initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
            animate={reduceMotion ? undefined : { scale: 1.15, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <Motion.div
            className="tt2-intro-glow tt2-intro-glow-2"
            initial={reduceMotion ? false : { scale: 0.82, opacity: 0 }}
            animate={reduceMotion ? undefined : { scale: 1.2, opacity: 0.9 }}
            transition={{ duration: 1.3, delay: 0.1, ease: EASE }}
          />

          <Motion.div
            className="tt2-intro-logo-wrap"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { scale: 0.92, y: -18, opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          >
            <div className="tt2-intro-logo-box">
              <LogoMark className="tt2-intro-symbol" size={320} title="TironiTech" />
              {!reduceMotion && (
                <Motion.span
                  className="tt2-intro-symbol-shine"
                  aria-hidden="true"
                  initial={{ x: "-140%" }}
                  animate={{ x: "140%" }}
                  transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
                />
              )}
            </div>

            <div className="tt2-intro-brand">
              <h2 aria-label={BRAND}>
                {BRAND.split("").map((char, index) => (
                  <Motion.span
                    key={`${char}-${index}`}
                    className="tt2-intro-letter"
                    aria-hidden="true"
                    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 1.2 + index * 0.035, ease: EASE }}
                  >
                    {char}
                  </Motion.span>
                ))}
              </h2>

              <Motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.45, ease: EASE }}
              >
                {TAGLINE}
              </Motion.p>
            </div>

            <Motion.div
              className="tt2-intro-line"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
            />
          </Motion.div>

          {!reduceMotion && (
            <Motion.div
              className="tt2-intro-ticker"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              transition={{ duration: 0.6, delay: 1.8, ease: EASE }}
            >
              <div className="tt2-intro-ticker-track">
                {[...TICKER, ...TICKER, ...TICKER].map((term, index) => (
                  <span key={`${term}-${index}`}>{term}</span>
                ))}
              </div>
            </Motion.div>
          )}
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
