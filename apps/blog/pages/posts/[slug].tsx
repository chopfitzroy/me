import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { allPosts } from "../../.contentlayer/generated";
import { PostsLayout } from "../../components/PostsLayout";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Post } from "../../.contentlayer/generated";
import { authoringComponents } from "../../utilities/authoring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostsProps {
  post: Post;
}

const Posts: FC<PostsProps> = ({ post }) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <PostsLayout {...post}>
      <Component components={authoringComponents} />
    </PostsLayout>
  );
};

const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PostsProps, Params> = async ({
  params,
}) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (post === undefined) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
};

export default Posts;
export { getStaticPaths, getStaticProps };
