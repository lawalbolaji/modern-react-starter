import { EntityId, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type Todo = {
  id: number | string;
  createdAt: string;
  lastUpdatedAt: string;
  text: string;
  favorite: boolean;
  checked: boolean;
};

export type NormalizedTodos = {
  ids: EntityId[];
  entities: Record<number, Todo>;
};

const todoAdapter = createEntityAdapter<Todo>({});

export const loadTodos = createAsyncThunk("todo/loadTodos", () => {
  const persistedTodos = window.localStorage.getItem("todos");
  if (persistedTodos !== null) {
    const parsedTodos = JSON.parse(persistedTodos) as NormalizedTodos;

    return parsedTodos;
  }

  return null;
});

export const createTodo = createAsyncThunk("todo/createTodo", (payload: Todo, thunkApi) => {
  const { ids, entities } = (thunkApi.getState() as RootState).todo as NormalizedTodos;
  const update = {
    ids: [...ids, payload.id],
    entities: {
      ...entities,
      [payload.id]: payload,
    },
  } satisfies NormalizedTodos;

  window.localStorage.setItem("todos", JSON.stringify(update));
  return payload;
});

export const updateTodo = createAsyncThunk("todo/updateTodo", (payload: Partial<Todo>, thunkApi) => {
  const { ids, entities } = (thunkApi.getState() as RootState).todo;
  const { id, ...changes } = payload;

  if (id !== undefined && entities[id] !== undefined) {
    const update = {
      ids,
      entities: {
        ...entities,
        [id]: {
          ...entities[id],
          ...changes,
        },
      },
    };

    window.localStorage.setItem("todos", JSON.stringify(update));
    return { id, changes };
  }

  throw new Error("Missing todo id");
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", (entityId: EntityId, thunkApi) => {
  const { ids, entities } = (thunkApi.getState() as RootState).todo;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [entityId]: _, ...remainingEntities } = entities;

  const update = {
    ids: ids.filter((id) => id !== entityId),
    entities: remainingEntities,
  };

  window.localStorage.setItem("todos", JSON.stringify(update));
  return entityId;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoAdapter.getInitialState({
    status: "idle",
    /* 
        ids: [1, 2, ...]
        entities: {
            1: {id: 1, ...}, ..
        }
     */
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.fulfilled, (state, action: { payload: NormalizedTodos | null }) => {
        if (action.payload !== null) {
          todoAdapter.upsertMany(state, action.payload.entities);
        }
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        todoAdapter.addOne(state, action);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        todoAdapter.updateOne(state, action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        todoAdapter.removeOne(state, action.payload);
      });
  },
});

export const { selectById: selectTodoById, selectAll } = todoAdapter.getSelectors((state: RootState) => state.todo);
export const selectTodoIdsByChecked = createSelector([selectAll, (state, checked) => checked], (todos, checked) =>
  todos.filter((todo) => todo.checked === checked),
);
