import { LightDarkToggle } from "../components/LightDarkToggle";
import { LightDarkWrapper } from "../components/LightDarkWrapper";
import { PreferencesProvider } from "../context/Preferences/PreferencesContext";

import "../assets/styles/main.css";

// TODO
// - Type this entire file properly

const App = ({ Component, pageProps }) => {
  return (
    <PreferencesProvider>
      <LightDarkWrapper>
        <LightDarkToggle />
        <Component {...pageProps} />
      </LightDarkWrapper>
    </PreferencesProvider>
  );
};

export default App;
