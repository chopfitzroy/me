import { BlogProps } from "./";
import { useMemo, useState } from "react";

type BlogPosts = BlogProps["posts"];

interface UseBlog {
  posts: BlogPosts;
}

type UseBlogSignature = (props: BlogProps) => UseBlog;
const useBlog: UseBlogSignature = (props) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const posts = useMemo<BlogPosts>(() => {
    const filtered = props.posts.filter(({ title, description }) => {
      return title.includes(searchValue) || description.includes(searchValue);
    });

    const sorted = filtered.sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
    return sorted;
  }, [props, searchValue]);

  return {
    posts,
  };
};

export { useBlog };
