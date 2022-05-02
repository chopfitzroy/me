import { PropsWithChildren } from "react";
import { useLightDarkWrapper } from "./useLightDarkWrapper";

type LightDarkWrapperSignature = (props: PropsWithChildren<{}>) => JSX.Element;
const LightDarkWrapper: LightDarkWrapperSignature = ({ children }) => {
  const { className } = useLightDarkWrapper();
  return <div className={className}>{children}</div>;
};

export { LightDarkWrapper };
