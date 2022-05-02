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
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              Twitter
            </a>
          </li>
          <li>
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              Sitemap
            </a>
          </li>
          <li>
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              RSS
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a className="font-body text-gray-700 dark:text-slate-200" href="#">
              Newsletter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
