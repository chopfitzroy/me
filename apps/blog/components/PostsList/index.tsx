import Link from "next/link";

import { FC } from "react";
import { Blog } from "../../.contentlayer/generated";

interface PostListProps {
  posts: Blog[];
  className?: string;
}

const PostList: FC<PostListProps> = ({ posts, className = "" }) => (
  <div className={className}>
    {posts.map((post) => (
      <div
        key={post.slug}
        className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800"
      >
        <p className="mb-2 font-bold font-heading text-2xl text-slate-700 dark:text-slate-200">
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </p>
        <p className="font-body text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      </div>
    ))}
  </div>
);

export { PostList };
