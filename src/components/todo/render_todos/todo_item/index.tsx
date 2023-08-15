import { useState } from "react";
import { useDispatch } from "react-redux";
import { Todo, AppDispatch, updateTodo, deleteTodo } from "../../../../store";
import { AnimatedFavBtn } from "../../../custom/AnimatedFavBtn";
import { DeleteButtonWithIcon } from "../../../custom/DeleteButtonWithIcon";
import { ResizableInput } from "../../../custom/ResizableInput";

export function TodoItem(props: { todo: Todo }) {
  const { todo } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [todoText, setTodoText] = useState(todo?.text);

  const handleTodoCheckToggled = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        checked: !todo.checked,
        text: todoText,
        lastUpdatedAt: new Date().toUTCString(),
      }),
    );
  };

  const handleClickFav = (e: React.MouseEvent<HTMLDivElement>) => {
    if (todo.favorite) {
      e.currentTarget.classList.remove("animate-heart");
    } else {
      e.currentTarget.classList.add("animate-heart");
    }

    dispatch(
      updateTodo({
        id: todo.id,
        text: todoText,
        lastUpdatedAt: new Date().toUTCString(),
        favorite: !todo.favorite,
      }),
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center pl-4">
        <div className="flex overflow-hidden">
          <input
            checked={todo.checked}
            type="checkbox"
            className="w-4 h-4 m-auto text-blue-600 rounded cursor-pointer select-none"
            onChange={handleTodoCheckToggled}
          />

          {todo.checked ? (
            <div className="line-through mx-2 text-orange-600">{todo.text}</div>
          ) : (
            <ResizableInput todo={todo} text={todoText} setText={setTodoText} />
          )}
        </div>

        <AnimatedFavBtn isOn={todo.favorite} onClick={handleClickFav} />
        <DeleteButtonWithIcon onClick={() => dispatch(deleteTodo(todo.id))} />
      </div>
    </div>
  );
}
