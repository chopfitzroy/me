import { FC } from "react";

const Heading: FC = ({ children }) => {
  return (
    <h1 className="text-5xl font-bold font-heading leading-loose text-slate-700 dark:text-slate-200">
      {children}
    </h1>
  );
};

export { Heading };
