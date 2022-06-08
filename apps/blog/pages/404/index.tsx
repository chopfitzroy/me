import Link from "next/link";
import Image from "next/image";
import Pug from '../../assets/images/pug.jpg';

import { FC } from "react";
import { Heading } from "../../components/Heading";

const NotFound: FC = () => {
  return (
    <div className="w-full max-w-screen-md p-4 pt-0">
      <Heading>Oops! Something went wrong.</Heading>
      <p className="leading-loose font-body text-slate-700 dark:text-slate-200">
        We can&apos;t find the page you are looking for, if you got here by accident
        please click{" "}
        <Link href="/">
          <a className="text-pink-500 dark:text-green-300">here</a>
        </Link>{" "}
        to head home.
      </p>
      <p className="mb-4 leading-loose font-body text-slate-700 dark:text-slate-200">
        If you did mean to get here, please enjoy this picture of a pug.
      </p>
      <Image src={Pug} layout="responsive" alt="Pug in a blanket" />
    </div>
  );
};

export default NotFound;
