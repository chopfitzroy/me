import localforage from "localforage";

import { useEffect, useCallback } from "react";
import { ColorTheme } from "../../context/Preferences/PreferencesContext";
import { usePreferences } from "../../context/Preferences/usePreferences";

type ToggleColorThemeSignature = () => void;

interface UseLightDarkToggle {
  colorTheme: ColorTheme;
  toggleColorTheme: ToggleColorThemeSignature;
}

type SetColorThemeToCacheSignature = (theme: ColorTheme) => Promise<void>;
const setColorThemeToCache: SetColorThemeToCacheSignature = async (theme) => {
  try {
    await localforage.setItem<ColorTheme>("colorTheme", theme);
  } catch (_: unknown) {
    console.warn(`Error persisting 'colorTheme' to local storage.`);
  }
};

type GetColorThemeFromCacheSignature = () => Promise<ColorTheme>;
const getColorThemeFromCache: GetColorThemeFromCacheSignature = async () => {
  try {
    const theme = await localforage.getItem<ColorTheme>("colorTheme");

    if (theme === null) {
      throw new Error(`No valid theme found in local storage.`);
    }

    return theme;
  } catch (_: unknown) {
    console.log(
      `Error fetching 'colorTheme' from local storage. Using system instead.`
    );

    // Catch server render
    // - https://stackoverflow.com/questions/49411796/how-do-i-detect-whether-i-am-on-server-on-client-in-next-js
    if (typeof window === "undefined") {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
};

type UseLightDarkToggleSignature = () => UseLightDarkToggle;
const useLightDarkToggle: UseLightDarkToggleSignature = () => {
  const { colorTheme, setColorTheme } = usePreferences();

  const toggleColorTheme = useCallback<ToggleColorThemeSignature>(() => {
    setColorTheme((current) => {
      if (current === "light") {
        return "dark";
      }
      if (current === "dark") {
        return "light";
      }

      console.warn(
        `'toggleColorTheme' recieved an invalid value '${current}' please used a valid value.`
      );
      return "light";
    });
  }, [setColorTheme]);

  useEffect(() => {
    (async () => {
      // Persist to cache as side effect
      await setColorThemeToCache(colorTheme);
    })();
  }, [colorTheme]);

  useEffect(() => {
    (async () => {
      const theme = await getColorThemeFromCache();
      setColorTheme(theme);
    })();
  }, [setColorTheme]);

  return {
    colorTheme,
    toggleColorTheme,
  };
};

export { useLightDarkToggle };
