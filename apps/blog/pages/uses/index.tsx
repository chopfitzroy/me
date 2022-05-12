import { InferGetStaticPropsType } from "next";
import { allPages } from "../../.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export type UsesProps = InferGetStaticPropsType<typeof getStaticProps>;

type UsesSignature = (props: UsesProps) => JSX.Element;
const Uses: UsesSignature = ({ body: { code } }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full max-w-screen-md p-4">
      <h1 className="mb-6 text-5xl font-bold font-heading text-slate-700 dark:text-slate-200">
        Uses
      </h1>
      <div className="max-w-none mb-4 prose dark:prose-dark">
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
