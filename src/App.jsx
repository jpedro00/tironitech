import ResponsiveHome from "./responsive/ResponsiveHome";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <ResponsiveHome />
    </LanguageProvider>
  );
}