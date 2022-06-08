import { useState, createContext, SetStateAction, Dispatch, FC } from "react";

export type ColorTheme = "dark" | "light";
export interface PreferencesContextProps {
  colorTheme: ColorTheme;
  setColorTheme: Dispatch<SetStateAction<ColorTheme>>;
}

const PreferencesContext = createContext<undefined | PreferencesContextProps>(
  undefined
);

const PreferencesProvider: FC = ({ children }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("light");
  const value = { colorTheme, setColorTheme };
  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export { PreferencesContext, PreferencesProvider };
