import Image from "next/image";
import Me from "../assets/images/me.jpg";

const Main = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <div className="max-w-screen-md mx-auto p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1 className="text-5xl font-bold font-heading text-gray-700 dark:text-slate-200">
            Otis Sutton
          </h1>
        </div>
        <div className="rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
          <div className="rounded-full overflow-hidden">
            <Image src={Me} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
