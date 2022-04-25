import localforage from "localforage";

import { ColorTheme } from "../../context/Preferences/PreferencesContext";

type GetColorThemeSignature = () => Promise<ColorTheme>;
const getColorTheme: GetColorThemeSignature = async () => {
  try {
    const theme = await localforage.getItem<ColorTheme>("colorTheme");
    return theme;
  } catch (_: unknown) {
    console.warn(`Error fetching 'colorTheme' from local storage.`);
    return "system";
  }
};

const useLightDarkToggle = () => {};
