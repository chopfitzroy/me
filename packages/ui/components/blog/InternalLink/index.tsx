import Link from "next/link";
import { FC } from "react";

export interface BlogInternalLinkProps {
  href: string;
  className?: string;
}

const BlogInternalLink: FC<BlogInternalLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link href={href}>
      <a className={`${className}`}>{children}</a>
    </Link>
  );
};

export { BlogInternalLink };
