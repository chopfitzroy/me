import { useBlog } from "../../hooks/useBlog";
import { InferGetStaticPropsType } from "next";
import { PostList } from "../../components/PostsList";
import { allBlogs } from "../../.contentlayer/generated";

export type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

type BlogSignature = (props: BlogProps) => JSX.Element;
const Blog: BlogSignature = (props) => {
  const { posts, searchHandler } = useBlog(props);
  return (
    <div className="w-full max-w-screen-md p-4">
      <h1 className="mb-6 text-5xl font-bold font-heading text-slate-700 dark:text-slate-200">
        Blog
      </h1>
      <p className="mb-4 font-body text-slate-700 dark:text-slate-200">
        Hey there 👋 I&apos;ve been writing on and off for a few years now. Most
        of what you will find here is strictly related to programming or team
        leadership.
      </p>
      <div className="mb-8">
        <input
          type="text"
          name="search"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 focus:outline-none "
          placeholder="Search..."
          onChange={searchHandler}
        />
      </div>
      <PostList posts={posts} />
    </div>
  );
};

const getStaticProps = () => {
  const posts = allBlogs;
  return { props: { posts } };
};

export default Blog;
export { getStaticProps };
