import { FC } from "react";
import { BlogMetadata } from "ui";
import type { Post } from "../../.contentlayer/generated";

interface PostsLayoutProps extends Post {}

const PostsLayout: FC<PostsLayoutProps> = ({ children, ...props }) => {
  return (
    <article className="w-full max-w-screen-md p-4 pt-0">
      <BlogMetadata {...props} className="mb-4" />
      <section className="max-w-none prose dark:prose-invert">
        {children}
      </section>
    </article>
  );
};

export { PostsLayout };
