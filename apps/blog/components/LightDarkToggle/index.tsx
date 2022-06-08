import { FC } from "react";
import { Sun, Moon } from "@icon-park/react";
import { useLightDarkToggle } from "./useLightDarkToggle";

const LightDarkToggle: FC = () => {
  const { colorTheme, toggleColorTheme } = useLightDarkToggle();

  return (
    <button className="p-2 rounded bg-slate-200 dark:bg-slate-800" onClick={toggleColorTheme}>
      {colorTheme === "dark" && <Sun className="text-slate-200" />}
      {colorTheme === "light" && <Moon className="text-slate-700" />}
    </button>
  );
};

export { LightDarkToggle };
