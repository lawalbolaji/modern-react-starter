import { RenderTodos } from "../../components/todo/render_todos";
import { useInitTodos } from "../../hooks/useInitTodos";

/* 
TODOS:
- add tests for data CRUD layer
- add routes for - /all?before=[]&after=[]&fav=true

- add dark mode
*/

export function TodoScene() {
  useInitTodos();

  return (
    <div className="ml-[5%] mr-auto w-[90vw] flex min-h-screen">
      <div className="flex-auto min-h-full w-full pl-2 box-border">
        <div className="mt-10">
          <div className="py-4 box-border flex">
            <h2 className="text-3xl font-bold capitalize text-left flex-auto">T⚙️ Do&apos;s</h2>
            <div className="flex gap-x-4 leading-9">
              <div>💛</div>
              <div>🗓️</div>
              <div>today</div>
            </div>
          </div>

          <hr />

          <RenderTodos />
        </div>
      </div>
    </div>
  );
}
