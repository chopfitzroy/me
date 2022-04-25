import { BlogMetadata } from "ui";
import type { Blog } from "../../.contentlayer/generated";

interface BlogLayoutProps extends Blog {
  children: JSX.Element;
}

const BlogLayout = (props: BlogLayoutProps) => {
  return (
    <article className="h-screen bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto p-4">
        <BlogMetadata title={props.title} readingTime={props.readingTime} />
        <h2>{props.description}</h2>
        <p>{props.publishedAt}</p>
        <section className="max-w-none prose">{props.children}</section>
      </div>
    </article>
  );
};

export { BlogLayout };
