import Link from "next/link";

import { LightDarkToggle } from "../LightDarkToggle";

type NavigationBarSignature = () => JSX.Element;
const NavigationBar: NavigationBarSignature = () => {
  return (
      <nav className="flex justify-between w-full max-w-screen-md p-4">
        <ul className="flex font-bold text-slate-700 dark:text-slate-200">
          <li className="px-2 py-4">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="px-2 py-4">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="px-2 py-4">
            <Link href="/uses">
              <a>Uses</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <LightDarkToggle />
        </div>
      </nav>
  );
};

export { NavigationBar };
