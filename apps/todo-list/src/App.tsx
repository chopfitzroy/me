import { TodoList } from "./components/todo-list";

const App = () => {
  return (
    <div>
      <h1 className="text-4xl">To Do</h1>
      <TodoList />
    </div>
  );
};

export { App };
