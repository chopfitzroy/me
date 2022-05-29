import Image from "next/image";

import { MDXRemote } from "next-mdx-remote";
import { InferGetStaticPropsType } from "next";
import { Octokit } from "@octokit/core";
import { PostList } from "../components/PostsList";
import { serialize } from "next-mdx-remote/serialize";
import { allBlogs } from "../.contentlayer/generated";

import Me from "../assets/images/me.jpg";
import { Heading } from "../components/Heading";

type MainProps = InferGetStaticPropsType<typeof getStaticProps>;

type MainSignature = (props: MainProps) => JSX.Element;
const Main: MainSignature = ({ posts, content }) => {
  return (
    <div className="w-full max-w-screen-md p-4">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-3">
          <Heading>Otis Sutton</Heading>
          <div className="max-w-none prose dark:prose-dark">
            <MDXRemote {...content} />
          </div>
        </div>
        <div>
          <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
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

const getStaticProps = async () => {
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

  const posts = allBlogs
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 5);

  return { props: { posts, content } };
};

export default Main;
export { getStaticProps };
