import { nanoid } from "nanoid";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewTodo } from "../create_todo";
import { TodoItem } from "./todo_item";
import { selectTodoIdsByFilter, createTodo } from "../../../pages/todo/TodoPageSlice";

function useUrlSearchParams() {
  try {
    const url = new URL(window.location.href);
    const fav = url.searchParams.get("fav");
    const after = url.searchParams.get("after");

    return {
      fav: fav === null ? undefined : Boolean(fav),
      after: after === null ? undefined : (after as "today"),
    };
  } catch (error) {
    return {};
  }
}

export function RenderTodos() {
  const dispatch = useDispatch<AppDispatch>();
  const { fav, after } = useUrlSearchParams();
  const checkedTodos = useSelector((state: RootState) => selectTodoIdsByFilter(state, { checked: true, fav, after }));
  const unCheckedTodos = useSelector((state: RootState) =>
    selectTodoIdsByFilter(state, { checked: false, fav, after }),
  );

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
