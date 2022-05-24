const Footer = () => {
  // NOTE
  // - Abusing auto margins because `align-self` and `justify-self` are not working
  // - Would love to spend the time to understand why this is at some point...
  // - https://css-tricks.com/the-peculiar-magic-of-flexbox-and-auto-margins/
  return (
    <div className="mt-auto w-full max-w-screen-md pt-4 px-4 pb-8 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
      <div>
        <ul>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="https://www.linkedin.com/in/otiswright/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="https://twitter.com/ChopFitzroy"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="https://github.com/chopfitzroy"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="#"
              rel="noreferrer"
            >
              Sitemap
            </a>
          </li>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="#"
              rel="noreferrer"
            >
              RSS
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="https://buttondown.email/otis"
              target="_blank"
              rel="noreferrer"
            >
              Newsletter
            </a>
          </li>
          <li>
            <a
              className="font-body text-slate-700 dark:text-slate-200"
              href="https://buttondown.email/otis/archive"
              target="_blank"
              rel="noreferrer"
            >
              Archive
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
