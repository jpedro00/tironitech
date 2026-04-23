import { useEffect, useMemo, useState } from "react";
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

  const [phase, setPhase] = useState("enter");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!shouldStartVisible) {
      setHidden(true);
      return;
    }

    // Mobile um pouco mais longo, desktop intacto.
    const fadeAtMs = mobile ? 1500 : 1300;
    const hideAtMs = mobile ? 2450 : 2000;

    const t1 = setTimeout(() => setPhase("fade"), fadeAtMs);
    const t2 = setTimeout(() => {
      setHidden(true);
      try {
        sessionStorage.setItem(seenKey, "true");
      } catch {
        // ignore storage errors
      }
      onFinish?.();
    }, hideAtMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [mobile, onFinish, seenKey, shouldStartVisible]);

  if (hidden) return null;

  return (
    <div className={`site-intro ${phase} ${mobile ? "is-mobile" : "is-desktop"}`}>
      <div className="site-intro__bg" />
      <div className="site-intro__glow site-intro__glow--one" />
      <div className="site-intro__glow site-intro__glow--two" />

      <div className="site-intro__content">
        <div className="site-intro__logoWrap">
          <img
            src="/brand/tironi-symbol.png"
            alt="Tironi Tech símbolo"
            className="site-intro__logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <h1 className="site-intro__title">Tironi Tech</h1>
        <p className="site-intro__subtitle">Tecnologia com clareza, estrutura e evolução</p>
      </div>
    </div>
  );
}

