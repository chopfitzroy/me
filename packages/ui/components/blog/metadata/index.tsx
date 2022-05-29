import { useWindupString } from "windups";

interface BlogMetadataProps {
  title: string;
  description: string;
  publishedAt: string;
  // TODO type `readingTime` properly
  readingTime: any;
  className?: string;
}

type BlogMetadataSignature = (props: BlogMetadataProps) => JSX.Element;
const BlogMetadata: BlogMetadataSignature = ({
  title,
  publishedAt,
  readingTime,
  className = "",
}) => {
  const [animatedTitle] = useWindupString(title);

  return (
    <div className={className}>
      <div>
        <h1 className="inline-block bg-clip-text bg-gradient-to-r text-transparent text-5xl leading-loose font-heading font-bold from-pink-500 via-red-500 to-yellow-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
          {animatedTitle}
        </h1>
      </div>
      <p className="font-body text-slate-700 dark:text-slate-200">{publishedAt}</p>
    </div>
  );
};

export { BlogMetadata };
