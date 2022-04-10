import { ReactElement } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "../../.contentlayer/generated";
import type { Blog } from "../../.contentlayer/generated";
import { BlogLayout } from "../../components/BlogLayout";

interface BlogProps {
  blog: Blog;
}

type BlogSignature = (props: BlogProps) => ReactElement;
const Blog: BlogSignature = ({ blog }) => {
  const Component = useMDXComponent(blog.body.code);
  return (
    <BlogLayout {...blog}>
      <Component />
    </BlogLayout>
  );
};

const getStaticPaths = async () => {
  return {
    paths: allBlogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  };
};

const getStaticProps = async ({ params }) => {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  return { props: { blog } };
};

export default Blog;
export { getStaticPaths, getStaticProps };
