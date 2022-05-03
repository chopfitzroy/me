import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { InferGetStaticPropsType } from "next";
import { allBlogs } from "../../.contentlayer/generated";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

const content = `
Hey there 👋 I've been writing on and off for a few years now. Most of what you will find here is strictly related to programming or team leadership.
`;

type BlogSignature = (props: BlogProps) => JSX.Element;
const Blog: BlogSignature = ({ posts }) => {
  return (
    <div className="w-full max-w-screen-md p-4">
      <h1 className="mb-6 text-5xl font-bold font-heading text-gray-700 dark:text-slate-200">
        Blog
      </h1>
      <ReactMarkdown
        children={content}
        className="max-w-none mb-4 prose dark:prose-dark"
      ></ReactMarkdown>
      <div>
        {posts.map((post) => (
          <div key={post.slug}>
            <h3 className="text-3xl font-bold underline">
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const getStaticProps = () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts } };
};

export default Blog;
export { getStaticProps };
