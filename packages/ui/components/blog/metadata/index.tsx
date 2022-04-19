import { useWindupString } from "windups";

interface BlogMetadataProps {
  title: string;
  // TODO type `readingTime` properly
  readingTime: any;
  className?: string;
}

type BlogMetadataSignature = (props: BlogMetadataProps) => JSX.Element;
const BlogMetadata: BlogMetadataSignature = ({
  title,
  readingTime,
  className = "",
}) => {
  const [animatedTitle] = useWindupString(title);

  return (
    <div className={className}>
      <h1 className="text-3xl font-heading font-bold">{animatedTitle}</h1>
    </div>
  );
};

export { BlogMetadata };
