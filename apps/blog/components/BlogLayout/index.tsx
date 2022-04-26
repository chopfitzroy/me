import { BlogMetadata } from "ui";
import type { Blog } from "../../.contentlayer/generated";

interface BlogLayoutProps extends Blog {
  children: JSX.Element;
}

type BlogLayoutSignature = (props: BlogLayoutProps) => JSX.Element;
const BlogLayout: BlogLayoutSignature = ({ children, ...props }) => {
  return (
    <article className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto p-4">
        <BlogMetadata {...props} />
        {/* Use `dark:prose-invert` for a more 'generic' solution */}
        <section className="max-w-none prose dark:prose-dark">{children}</section>
      </div>
    </article>
  );
};

export { BlogLayout };
