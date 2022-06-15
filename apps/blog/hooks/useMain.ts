import { useMemo } from "react";
import { MainProps } from "../pages";
import { Post } from "../.contentlayer/generated";

interface UseMain extends MainProps {}

type UseMainSignature = (props: MainProps) => UseMain;
const useMain: UseMainSignature = (props) => {
  const posts = useMemo<Post[]>(() => {
    const filtered = props.posts.filter(({ draft }) => !draft);

    const sorted = filtered.sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

    const sliced = sorted.slice(0, 3);

    return sliced;
  }, [props]);

  return {
    ...props,
    posts,
  };
};

export { useMain };
