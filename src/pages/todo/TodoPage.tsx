import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RenderTodos } from "../../components/todo/render_todos";
import { AppDispatch } from "../../store";
import { loadTodos } from "./TodoPageSlice";

export function TodoPage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div className="ml-[5%] mr-auto w-[90vw] flex min-h-screen">
      <div className="flex-auto min-h-full w-full pl-2 box-border">
        <div className="mt-10">
          <div className="py-4 box-border flex">
            <h2 className="text-3xl font-bold capitalize text-left flex-auto">T⚙️ Do&apos;s</h2>
            <div className="flex gap-x-4 leading-9">
              <div className="cursor-pointer select-none">
                💛&nbsp;
                <a href="?fav=true" className="no-underline hover:border-b hover:border-neutral-800 pb-2 box-border">
                  favorites
                </a>
              </div>
              <div>
                🗓️&nbsp;
                <a href="?after=today" className="no-underline hover:border-b hover:border-neutral-800 pb-2 box-border">
                  today
                </a>
              </div>
              <div>
                📝&nbsp;
                <a href="/" className="no-underline hover:border-b hover:border-neutral-800 pb-2 box-border">
                  all
                </a>
              </div>
            </div>
          </div>

          <hr />

          <RenderTodos />
        </div>
      </div>
    </div>
  );
}
