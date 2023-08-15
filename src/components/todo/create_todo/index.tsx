import { useState } from "react";

interface CreateNewTodoProps {
  label: string;
  onTodoCreated: (newValue: string) => void;
}

export function CreateNewTodo({ onTodoCreated, label }: CreateNewTodoProps) {
  const [newVal, setNewVal] = useState("");
  return (
    <div className="my-4">
      <div className="w-full flex">
        <div className="mr-[10px] select-none">✍🏻</div>
        <div className="w-full">
          <input
            value={newVal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNewVal(e.currentTarget.value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                onTodoCreated(newVal);
                setNewVal("");
              }
            }}
            type="text"
            placeholder={label}
            className="border-0 focus:outline-0 w-full"
          />
        </div>
      </div>
    </div>
  );
}
