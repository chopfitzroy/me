import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { InferGetStaticPropsType } from "next";
import { allBlogs } from "../.contentlayer/generated";

import Me from "../assets/images/me.jpg";

// Use the back tick syntax to get around VSCode auto formatting
const content: string = `
Frontend lead at [Re-leased](https://www.re-leased.com/).  
I like [Vue](https://vuejs.org/) 💚, [React](https://reactjs.org/) ⚛, [OpenAPI](https://www.openapis.org/) 🔗, and I am currently obsessed with [xState](https://xstate.js.org/) 💙.  
I enjoy fishing 🎣, reading 📚, hiking 🗻, and gaming 🎮.  
If you have any questions or want to get in touch please use the email address listed on my [Github profile](https://github.com/chopfitzroy).
`;

type MainProps = InferGetStaticPropsType<typeof getStaticProps>;

type MainSignature = (props: MainProps) => JSX.Element;
const Main: MainSignature = ({ posts }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="max-w-screen-md mx-auto p-4">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="col-span-3">
            <h1 className="mb-6 text-5xl font-bold font-heading text-gray-700 dark:text-slate-200">
              Otis Sutton
            </h1>
            {/* Technically it would probably be easier to make this page an `.mdx` file */}
            {/* But something about that just feels wrong when most of the content is this one block */}
            <ReactMarkdown
              children={content}
              className="max-w-none prose dark:prose-dark"
            ></ReactMarkdown>
          </div>
          <div>
            <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
              <div className="rounded-full overflow-hidden">
                <Image src={Me} layout="responsive" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold font-heading text-gray-700 dark:text-slate-200">Latest Posts</h2>
          {posts.map((post) => (
            <div key={post.slug} className="pb-2 mb-2 border-b border-slate-200 dark:border-slate-800">
              <p className="mb-2 font-bold font-body text-xl text-gray-700 dark:text-slate-200">
                <Link href={`/posts/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </p>
              <p className="font-body text-gray-700 dark:text-slate-200">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getStaticProps = () => {
  const posts = allBlogs
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 5);

  return { props: { posts } };
};

export default Main;
export { getStaticProps };
