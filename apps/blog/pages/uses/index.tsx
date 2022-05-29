import { InferGetStaticPropsType } from "next";
import { allPages } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Heading } from "../../components/Heading";

export type UsesProps = InferGetStaticPropsType<typeof getStaticProps>;

type UsesSignature = (props: UsesProps) => JSX.Element;
const Uses: UsesSignature = ({ body: { code } }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full max-w-screen-md p-4">
      <Heading>Uses</Heading>
      <div className="max-w-none mb-4 prose dark:prose-invert">
        <Component />
      </div>
    </div>
  );
};

const getStaticProps = () => {
  const uses = allPages.find((page) => page.slug === "uses");

  return { props: uses };
};

export { getStaticProps };

export default Uses;
