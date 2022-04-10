import { InferGetStaticPropsType } from "next";
import { allBlogs } from "../../.contentlayer/generated";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

type BlogSignature = (props: BlogProps) => JSX.Element;
const Blog: BlogSignature = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h3 className="text-3xl font-bold underline">
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </h3>
          <p>{post.description}</p>
        </div>
      ))}
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
