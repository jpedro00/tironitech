import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveHome from "./responsive/ResponsiveHome";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <ResponsiveHome />
      <Analytics />
      <SpeedInsights />
    </LanguageProvider>
  );
}