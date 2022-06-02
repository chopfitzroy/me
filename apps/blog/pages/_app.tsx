import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar";
import { ContentWrapper } from "../components/ContentWrapper";
import { LightDarkWrapper } from "../components/LightDarkWrapper";
import { PreferencesProvider } from "../context/Preferences/PreferencesContext";

import "../assets/styles/shiki-twoslash.css"
import "../assets/styles/main.css";

// TODO
// - Type this entire file properly

const App = ({ Component, pageProps }) => {
  return (
    <PreferencesProvider>
      <LightDarkWrapper>
        <ContentWrapper>
          <NavigationBar />
          <Component {...pageProps} />
          <Footer />
        </ContentWrapper>
      </LightDarkWrapper>
    </PreferencesProvider>
  );
};

export default App;
