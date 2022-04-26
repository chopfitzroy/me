import { useState, createContext } from "react";

export type ColorTheme = "dark" | "light";

// TODO
// - Type this entire file properly
const PreferencesContext = createContext(undefined);

const PreferencesProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("light");
  const value = { colorTheme, setColorTheme };
  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext, PreferencesProvider };
