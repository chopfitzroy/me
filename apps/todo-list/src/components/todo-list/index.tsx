import { useTodoList } from "./useTodoList";

const TodoList = () => {
  const { formRef, formattedTodoList, handleFormSubmission } = useTodoList();
  return (
    <div>
      <div>
        {formattedTodoList.map((item, index) => (
          <p key={`${item.title}-${index}`}>
            {item.title} -{" "}
            <button type="button" onClick={item.remove}>
              Remove
            </button>
          </p>
        ))}
      </div>
      <form ref={formRef} onSubmit={handleFormSubmission}>
        <input required type="text" name="title" className="border" />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export { TodoList };
