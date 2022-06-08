import { FC } from "react";
import { BlogMetadata } from "ui";
import type { Blog } from "../../.contentlayer/generated";

interface BlogLayoutProps extends Blog {}

const BlogLayout: FC<BlogLayoutProps> = ({ children, ...props }) => {
  return (
    <article className="w-full max-w-screen-md p-4 pt-0">
      <BlogMetadata {...props} className="mb-4" />
      <section className="max-w-none prose dark:prose-invert">
        {children}
      </section>
    </article>
  );
};

export { BlogLayout };
