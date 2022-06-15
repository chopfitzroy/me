import { FC } from "react";
import { GetStaticProps } from "next";
import { usePosts } from "../../hooks/usePosts";
import { Heading } from "../../components/Heading";
import { PostList } from "../../components/PostsList";
import { allPosts, Post } from "../../.contentlayer/generated";

export interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = (props) => {
  const { posts, searchHandler } = usePosts(props);
  return (
    <div className="w-full max-w-screen-md p-4 pt-0">
      <Heading>Posts</Heading>
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

const getStaticProps: GetStaticProps<PostsProps> = () => {
  const posts = allPosts;
  return { props: { posts } };
};

export default Posts;
export { getStaticProps };
