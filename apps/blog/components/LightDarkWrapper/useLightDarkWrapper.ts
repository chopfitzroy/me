import { useMemo } from "react";
import { usePreferences } from "../../context/Preferences/usePreferences";

interface UseLightDarkWrapper {
  className: string;
}

type UseLightDarkWrapperSignature = () => UseLightDarkWrapper;
const useLightDarkWrapper: UseLightDarkWrapperSignature = () => {
  const { colorTheme } = usePreferences();

  const className = useMemo<string>(() => {
    // Catch server render
    // - https://stackoverflow.com/questions/49411796/how-do-i-detect-whether-i-am-on-server-on-client-in-next-js
    if (typeof window === "undefined") {
      return "light";
    }

    if (colorTheme === "system") {
      // https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return isSystemDark ? "dark" : "light";
    }

    // TODO
    // - Feel like this could be a bit cleaner
    return colorTheme === "dark" ? "dark" : "light";
  }, [colorTheme]);

  return {
    className,
  };
};

export { useLightDarkWrapper };
