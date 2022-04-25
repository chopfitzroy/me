import { useContext } from "react";
import { PreferencesContext } from "./PreferencesContext";

// TODO
// - Type this entire file properly

const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error(
      `'usePreferences' must be used within a 'PreferencesProvider'`
    );
  }
  return context;
};

export { usePreferences };
