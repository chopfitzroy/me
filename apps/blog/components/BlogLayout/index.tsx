import { BlogMetadata } from "ui";
import type { Blog } from "../../.contentlayer/generated";

interface BlogLayoutProps extends Blog {
  children: JSX.Element;
}

type BlogLayoutSignature = (props: BlogLayoutProps) => JSX.Element;
const BlogLayout: BlogLayoutSignature = ({ children, ...props }) => {
  return (
    <article className="w-full max-w-screen-md p-4">
      <BlogMetadata {...props} />
      {/* Use `dark:prose-invert` for a more 'generic' solution */}
      <section className="max-w-none prose dark:prose-dark">{children}</section>
    </article>
  );
};

export { BlogLayout };
