import { FC } from "react";
import { BlogInternalLink } from "ui";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allWorkshops } from "../../.contentlayer/generated";
import type { Workshop } from "../../.contentlayer/generated";
import { WorkshopsLayout } from "../../components/WorkshopsLayout";
import { FunctionalBasicsVocabulary } from "../../components/Workshops/FunctionalBasicsVocabulary";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface WorkshopsProps {
  workshop: Workshop;
}

const Workshops: FC<WorkshopsProps> = ({ workshop }) => {
  const Component = useMDXComponent(workshop.body.code);
  return (
    <WorkshopsLayout {...workshop}>
      <Component
        components={{
          BlogInternalLink,
          FunctionalBasicsVocabulary,
        }}
      />
    </WorkshopsLayout>
  );
};

const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: allWorkshops.map((workshop) => ({ params: { slug: workshop.slug } })),
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<WorkshopsProps, Params> = async ({
  params,
}) => {
  const workshop = allWorkshops.find(
    (workshop) => workshop.slug === params.slug
  );
  if (workshop === undefined) {
    return {
      notFound: true,
    };
  }
  return { props: { workshop } };
};

export default Workshops;
export { getStaticPaths, getStaticProps };
