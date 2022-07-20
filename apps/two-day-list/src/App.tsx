import { TwoDayList } from "./components/two-day-list";

const App = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-4xl">Two day list</h1>
      <p>Get it done in 48 hours or less!</p>
      <TwoDayList />
    </div>
  );
};

export { App };
