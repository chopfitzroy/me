import { useImmer } from "use-immer";
import { FormEvent, useCallback, useMemo, useRef } from "react";

interface FormElements extends HTMLFormControlsCollection {
    title: HTMLInputElement
  }
  interface TodoListFormElement extends HTMLFormElement {
    readonly elements: FormElements
  }

interface Todo {
  title: string;
}

type AddTodoSignature = (item: Todo) => void;
type RemoveTodoSignature = (item: Todo) => void;
type HandleFormSubmission = (event: FormEvent<TodoListFormElement>) => void;

const useTodoList = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [todoList, setTodoList] = useImmer(new Set<Todo>());

  const addTodo = useCallback<AddTodoSignature>((item) => {
    setTodoList((current) => {
      current.add(item);
    });
  }, []);

  const removeTodo = useCallback<RemoveTodoSignature>((item) => {
    setTodoList((current) => {
      current.delete(item);
    });
  }, []);

  const handleFormSubmission = useCallback<HandleFormSubmission>(
    (event) => {
      if (formRef.current === null) {
        return;
      }
      const title = event.currentTarget.elements.title.value;
      addTodo({ title });
      event.preventDefault();
      formRef.current.reset();
    },
    [addTodo]
  );

  const formattedTodoList = useMemo(() => {
    return [...todoList].map((item) => {
      return {
        ...item,
        remove: () => removeTodo(item),
      };
    });
  }, [todoList, removeTodo]);

  return {
    formRef,
    formattedTodoList,
    handleFormSubmission,
  };
};

export { useTodoList };
