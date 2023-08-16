import { PreloadedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../pages/todo/TodoPageSlice";

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
});

export const setupStore = (preloadedState: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
