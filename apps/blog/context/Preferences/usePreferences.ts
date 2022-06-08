import { useContext } from "react";
import {
  PreferencesContext,
  PreferencesContextProps,
} from "./PreferencesContext";

interface UsePreferences extends PreferencesContextProps {}

type UsePreferencesSigntare = () => UsePreferences;
const usePreferences: UsePreferencesSigntare = () => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error(
      `'usePreferences' must be used within a 'PreferencesProvider'`
    );
  }
  return context;
};

export { usePreferences };
