import { useLightDarkWrapper } from "./useLightDarkWrapper";

interface LightDarkWrapperProps {
  children: JSX.Element | JSX.Element[];
}

type LightDarkWrapperSignature = (props: LightDarkWrapperProps) => JSX.Element;
const LightDarkWrapper: LightDarkWrapperSignature = ({ children }) => {
  const { className } = useLightDarkWrapper();
  return <div className={className}>{children}</div>;
};

export { LightDarkWrapper };
