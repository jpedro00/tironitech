import DesktopHome from "../desktop/DesktopHome";
import MobileHome from "../mobile/MobileHome";
import IntroOverlay from "../components/IntroOverlay";
import { useViewportMode } from "../hooks/useViewportMode";

export default function ResponsiveHome() {
  const { isMobile } = useViewportMode(767);
  return (
    <>
      <IntroOverlay />
      {isMobile ? <MobileHome /> : <DesktopHome />}
    </>
  );
}

