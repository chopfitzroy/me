import { FC } from "react";

interface FooterLinkProps {
  href: string;
  className?: string;
}

const FooterLink: FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      className={`font-body text-slate-700 dark:text-slate-200 ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

const Footer: FC = () => {
  // NOTE
  // - Abusing auto margins because `align-self` and `justify-self` are not working
  // - Would love to spend the time to understand why this is at some point...
  // - https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/
  return (
    <div className="px-4 mt-auto w-full max-w-screen-md">
      <div className="pt-4 grid grid-cols-3 border-t border-slate-200 dark:border-slate-800">
        <div className="pb-4 mb-4 col-span-3 sm:col-span-1 sm:col-span-1 border-b border-slate-200 dark:border-slate-800 sm:border-b-0">
          <ul>
            <li>
              <FooterLink href="https://www.linkedin.com/in/otiswright/">
                LinkedIn
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://twitter.com/ChopFitzroy">
                Twitter
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://github.com/chopfitzroy">
                GitHub
              </FooterLink>
            </li>
          </ul>
        </div>
        <div className="pb-4 mb-4 col-span-3 sm:col-span-1 sm:col-span-1 border-b border-slate-200 dark:border-slate-800 sm:border-b-0">
          <ul>
            <li>
              <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
            </li>
            <li>
              <FooterLink href="/atom.xml">Atom</FooterLink>
            </li>
            <li>
              <FooterLink href="/feed.xml">RSS</FooterLink>
            </li>
          </ul>
        </div>
        <div className="pb-4 mb-4 col-span-3 sm:col-span-1">
          <ul>
            <li>
              <FooterLink href="https://buttondown.email/otis">
                Newsletter
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://buttondown.email/otis/archive">
                Archive
              </FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Footer };
