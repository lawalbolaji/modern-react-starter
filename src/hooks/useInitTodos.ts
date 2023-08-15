import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, loadTodos } from "../store";

export function useInitTodos() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return true;
}
