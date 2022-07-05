import { useEffect } from "react";
import { setTodos } from "./redux/todoSlice";
import { useAppDispatch } from "./redux/hooks";
import { Todo } from './redux/todoSlice';

export default function useSaveToLocalStorage(todos: Todo[]) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      let todoLocal = JSON.parse(todos);
      dispatch(setTodos(todoLocal));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
}
