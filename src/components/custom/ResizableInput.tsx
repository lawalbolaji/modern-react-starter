import { useDispatch } from "react-redux";
import { Todo, updateTodo } from "../../pages/todo/TodoPageSlice";
import { AppDispatch } from "../../store";

interface ResizableInputProps {
  todo: Todo;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export function ResizableInput({ todo, text, setText }: ResizableInputProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <input
      type="text"
      className="ml-2 border-0 focus:outline-0 variable-width"
      style={{ width: `${text.length * 10}px` }}
      value={text}
      onBlur={() => {
        dispatch(
          updateTodo({
            id: todo.id,
            text: text,
            lastUpdatedAt: new Date().toUTCString(),
          }),
        );
      }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
    />
  );
}
