import Image from "next/image";
import Me from "../assets/images/me.jpg";

import { FC } from "react";
import { GetStaticProps } from "next";
import { Octokit } from "@octokit/core";
import { useMain } from "../hooks/useMain";
import { Heading } from "../components/Heading";
import { PostList } from "../components/PostsList";
import { serialize } from "next-mdx-remote/serialize";
import { allPosts, Post } from "../.contentlayer/generated";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";


export interface MainProps {
  posts: Post[];
  content: MDXRemoteSerializeResult<Record<string, unknown>>
}

// type MainSignature = (props: MainProps) => JSX.Element;
const Main: FC<MainProps> = (props) => {
  const { posts, content } = useMain(props);
  return (
    <div className="w-full max-w-screen-md p-4 pt-0">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-4 md:col-span-3">
          <Heading>Otis Sutton</Heading>
          <div className="max-w-none prose dark:prose-invert">
            <MDXRemote {...content} />
          </div>
        </div>
        <div className="col-span-4 md:col-span-1">
          <div className="w-32 max-w-full p-1 mx-auto mt-2 md:mt-10 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
            <div className="rounded-full overflow-hidden">
              <Image src={Me} layout="responsive" alt="Otis Sutton" />
            </div>
          </div>
        </div>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

const getStaticProps: GetStaticProps<MainProps> = async () => {
  // Fetch profile directly from GitHub
  // - https://github.com/chopfitzroy/chopfitzroy
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // NOTE have to use `any` here to force `.content` to be allowed below
  // - Would love to figure out how to type this correctly
  const { data } = await octokit.request<any>(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "chopfitzroy",
      repo: "chopfitzroy",
      path: "README.md",
    }
  );

  // Convert to RAW markdown
  // - https://futurestud.io/tutorials/how-to-base64-encode-decode-a-value-in-node-js
  const raw = Buffer.from(data.content, "base64");
  const decoded = raw.toString("utf8");
  const content = await serialize(decoded);

  const posts = allPosts;

  return { props: { posts, content } };
};

export default Main;
export { getStaticProps };
