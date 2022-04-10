import type { Blog } from "../../.contentlayer/generated";

type TrimmedBlog = Omit<Blog, "_id" | "_raw" | "type" | "body">;

interface BlogLayoutProps extends TrimmedBlog {
  children: JSX.Element;
}

const BlogLayout = (props: BlogLayoutProps) => {
  return (
    <article className="container mx-auto p-4">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <p>{props.publishedAt}</p>
      <section className="max-w-none prose lg:prose-xl">{props.children}</section>
    </article>
  );
};

export { BlogLayout };
