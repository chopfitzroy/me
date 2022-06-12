import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { allBlogs } from "../../.contentlayer/generated";
import { BlogLayout } from "../../components/BlogLayout";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Blog } from "../../.contentlayer/generated";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface BlogProps {
  blog: Blog;
}

const Blog: FC<BlogProps> = ({ blog }) => {
  const Component = useMDXComponent(blog.body.code);
  return (
    <BlogLayout {...blog}>
      <Component />
    </BlogLayout>
  );
};

const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<BlogProps, Params> = async ({
  params,
}) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (blog === undefined) {
    return {
      notFound: true,
    };
  }
  return { props: { blog } };
};

export default Blog;
export { getStaticPaths, getStaticProps };
