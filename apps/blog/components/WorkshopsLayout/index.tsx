import { FC } from "react";
import type { Workshop } from "../../.contentlayer/generated";

interface WorkshopsLayoutProps extends Workshop {}

const WorkshopsLayout: FC<WorkshopsLayoutProps> = ({ children }) => {
  return (
    <article className="w-full max-w-screen-md p-4 pt-0">
      <section className="max-w-none prose dark:prose-invert">
        {children}
      </section>
    </article>
  );
};

export { WorkshopsLayout };
