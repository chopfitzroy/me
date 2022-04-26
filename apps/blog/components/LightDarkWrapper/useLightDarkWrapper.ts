import { useMemo } from "react";
import { usePreferences } from "../../context/Preferences/usePreferences";

interface UseLightDarkWrapper {
  className: string;
}

type UseLightDarkWrapperSignature = () => UseLightDarkWrapper;
const useLightDarkWrapper: UseLightDarkWrapperSignature = () => {
  const { colorTheme } = usePreferences();

  const className = useMemo<string>(() => {
    if (colorTheme === "light") {
      return "light";
    }

    if (colorTheme === "dark") {
      return "dark";
    }

    // If unknown value, return no class
    // - Helpful for debugging
    return "";
  }, [colorTheme]);

  return {
    className,
  };
};

export { useLightDarkWrapper };
