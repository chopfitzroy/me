import { FC } from "react";
import { GetStaticProps } from "next";
import { Heading } from "../../components/Heading";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPages, Pages } from "../../.contentlayer/generated";

interface UsesProps extends Pages {};

const Uses: FC<UsesProps> = ({ body: { code } }) => {
  const Component = useMDXComponent(code);

  return (
    <div className="w-full max-w-screen-md p-4 pt-0">
      <Heading>Uses</Heading>
      <div className="max-w-none mb-4 prose dark:prose-invert">
        <Component />
      </div>
    </div>
  );
};

const getStaticProps: GetStaticProps<UsesProps> = () => {
  const uses = allPages.find((page) => page.slug === "uses");

  return { props: uses };
};

export { getStaticProps };

export default Uses;
