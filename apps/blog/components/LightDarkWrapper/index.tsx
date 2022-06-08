import { FC } from "react";
import { useLightDarkWrapper } from "./useLightDarkWrapper";

const LightDarkWrapper: FC = ({ children }) => {
  const { className } = useLightDarkWrapper();
  return <div className={className}>{children}</div>;
};

export { LightDarkWrapper };
