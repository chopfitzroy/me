import { PostsProps } from "../pages/posts";
import { Post } from "../.contentlayer/generated";
import { useMemo, useState, useCallback, ChangeEvent } from "react";

type SearchHandlerSignature = (event: ChangeEvent<HTMLInputElement>) => void;
interface usePosts {
  posts: Post[];
  searchHandler: SearchHandlerSignature;
}

type usePostsSignature = (props: PostsProps) => usePosts;
const usePosts: usePostsSignature = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const posts = useMemo<Post[]>(() => {
    const filtered = props.posts.filter(({ draft }) => !draft);

    const sorted = filtered.sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

    const searched = sorted.filter(({ title, description }) => {
      const normalizedTitle = title.toLowerCase();
      const normalizedDescription = description.toLowerCase();
      const normalizedSearchValue = searchValue.toLowerCase();
      return (
        normalizedTitle.includes(normalizedSearchValue) ||
        normalizedDescription.includes(normalizedSearchValue)
      );
    });

    return searched;
  }, [props, searchValue]);

  const searchHandler = useCallback<SearchHandlerSignature>((event) => {
    setSearchValue(event.target.value);
  }, []);

  return {
    posts,
    searchHandler,
  };
};

export { usePosts };
