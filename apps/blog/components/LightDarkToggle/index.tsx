import { Sun, Moon } from "@icon-park/react";
import { useLightDarkToggle } from "./useLightDarkToggle";

type LightDarkToggleSignature = () => JSX.Element;
const LightDarkToggle: LightDarkToggleSignature = () => {
  const { colorTheme, toggleColorTheme } = useLightDarkToggle();

  return (
    <button onClick={toggleColorTheme}>
      {colorTheme === "dark" && <Sun />}
      {colorTheme === "light" && <Moon />}
    </button>
  );
};

export { LightDarkToggle };
