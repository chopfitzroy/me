import { PropsWithChildren } from 'react';

type ContentWrapperSignature = (props: PropsWithChildren<{}>) => JSX.Element;
const ContentWrapper: ContentWrapperSignature = ({ children }) => {
  return (
      <div className="flex flex-col justify-start items-center min-h-screen bg-slate-100 dark:bg-slate-900">
        {children}
      </div>
  );
};

export { ContentWrapper };
