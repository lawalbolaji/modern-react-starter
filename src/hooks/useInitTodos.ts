import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { loadTodos } from "../pages/todo/TodoPageSlice";

export function useInitTodos() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return true;
}
