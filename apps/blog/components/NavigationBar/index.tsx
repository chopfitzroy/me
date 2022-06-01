import Link from "next/link";
import { FC } from "react";

import { HamburgerButton } from "@icon-park/react";

import { LightDarkToggle } from "../LightDarkToggle";
import { useNavigationBar } from "./useNavigationBar";

interface NavigationBarItemProps {
  className?: string;
}

const NavigationBarItem: FC<NavigationBarItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <a
      className={`block w-full px-2 py-4 border-b border-slate-200 dark:border-slate-800 sm:border-b-0 ${className}`}
    >
      {children}
    </a>
  );
};

const NavigationBar: FC = () => {
  const { expanded, toggleExpanded } = useNavigationBar();
  return (
    <nav className="flex flex-col sm:flex-row-reverse justify-between w-full max-w-screen-md p-4">
      <div className="flex justify-between">
        <div className="flex items-center justify-center">
          <LightDarkToggle />
        </div>
        <button className="p-2 rounded bg-slate-200 dark:bg-slate-800 sm:hidden" onClick={toggleExpanded}>
          <HamburgerButton className="text-slate-700 dark:text-slate-200" />
        </button>
      </div>

      <div
        className={`sm:h-auto sm:mt-0 mt-4 border-t border-slate-200 dark:border-slate-800 sm:border-t-0 overflow-hidden sm:max-h-screen transition-max-height duration-700 sm:transition-none ${
          expanded ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col sm:flex-row font-bold text-slate-700 dark:text-slate-200">
          <li>
            <Link href="/">
              <NavigationBarItem>Home</NavigationBarItem>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <NavigationBarItem>Blog</NavigationBarItem>
            </Link>
          </li>
          <li>
            <Link href="/uses">
              <NavigationBarItem>Uses</NavigationBarItem>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { NavigationBar };
