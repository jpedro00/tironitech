import DesktopHome from "../desktop/DesktopHome";
import MobileHome from "../mobile/MobileHome";
import { useViewportMode } from "../hooks/useViewportMode";

export default function ResponsiveHome() {
  const { isMobile } = useViewportMode(767);
  return isMobile ? <MobileHome /> : <DesktopHome />;
}

