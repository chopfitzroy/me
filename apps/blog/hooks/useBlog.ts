import { BlogProps } from "../pages/blog";
import { Blog } from "../.contentlayer/generated";
import { useMemo, useState, useCallback, ChangeEvent } from "react";

type SearchHandlerSignature = (event: ChangeEvent<HTMLInputElement>) => void;
interface UseBlog {
  posts: Blog[];
  searchHandler: SearchHandlerSignature;
}

type UseBlogSignature = (props: BlogProps) => UseBlog;
const useBlog: UseBlogSignature = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const posts = useMemo<Blog[]>(() => {
    const filtered = props.posts.filter(({ title, description }) => {
      return title.includes(searchValue) || description.includes(searchValue);
    });

    const sorted = filtered.sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
    return sorted;
  }, [props, searchValue]);

  const searchHandler = useCallback<SearchHandlerSignature>((event) => {
    setSearchValue(event.target.value);
  }, []);

  return {
    posts,
    searchHandler,
  };
};

export { useBlog };
