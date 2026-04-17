import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { LogoMark } from "../layout/Navbar";
import "../../styles/intro.css";

export default function SiteIntro({ onFinish, mobile = false }) {
  const seenKey = "tironi_intro_seen";

  const shouldStartVisible = useMemo(() => {
    try {
      return typeof sessionStorage !== "undefined" && !sessionStorage.getItem(seenKey);
    } catch {
      return false;
    }
  }, []);

  const [visible, setVisible] = useState(shouldStartVisible);

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(seenKey, "true");
      } catch {
        // ignore storage errors (private mode, blocked storage)
      }
      onFinish?.();
    }, 2100);

    return () => clearTimeout(timer);
  }, [onFinish, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <Motion.div
          className={`tt2-intro-overlay ${mobile ? "tt2-intro-overlay--mobile" : ""}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="tt2-intro-noise" />

          <Motion.div
            className="tt2-intro-glow tt2-intro-glow-1"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.15, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <Motion.div
            className="tt2-intro-glow tt2-intro-glow-2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.85 }}
            transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <Motion.div
            className="tt2-intro-logo-wrap"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Motion.div
              className="tt2-intro-logo-box"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(130, 90, 255, 0)",
                  "0 0 30px rgba(130, 90, 255, 0.35)",
                  "0 0 50px rgba(85, 110, 255, 0.28)",
                ],
              }}
              transition={{ duration: 1.6, repeat: 0 }}
            >
              <LogoMark className="tt2-intro-symbol" size={56} title="Tironi Tech" />
            </Motion.div>

            <Motion.div
              className="tt2-intro-brand"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
            >
              <h2>Tironi Tech</h2>
              <p>Software House &amp; Digital Solutions</p>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="tt2-intro-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          />
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

