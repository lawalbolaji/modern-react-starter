import { nanoid } from "nanoid";
import { AppDispatch, RootState, createTodo, selectTodoIdsByChecked } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewTodo } from "../create_todo";
import { TodoItem } from "./todo_item";

export function RenderTodos() {
  const dispatch = useDispatch<AppDispatch>();
  const checkedTodos = useSelector((state: RootState) => selectTodoIdsByChecked(state, true));
  const unCheckedTodos = useSelector((state: RootState) => selectTodoIdsByChecked(state, false));

  return (
    <>
      <div className="mt-4 flex flex-col gap-y-2">
        {unCheckedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>

      <CreateNewTodo
        label="add new todo here and press enter..."
        onTodoCreated={(newTodo: string) => {
          const timestamp = new Date().toUTCString();

          dispatch(
            createTodo({
              id: nanoid(),
              createdAt: timestamp,
              lastUpdatedAt: timestamp,
              text: newTodo,
              favorite: false,
              checked: false,
            }),
          );
        }}
      />

      <div className="mt-4 flex flex-col gap-y-2">
        {checkedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}
