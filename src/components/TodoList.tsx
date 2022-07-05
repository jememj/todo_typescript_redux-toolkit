import { FC } from "react";
import Todo from "./Todo";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import useSaveToLocalStorage from "../useSaveToLocalStorage";

const TodoList: FC = () => {
  const todos = useAppSelector((state: RootState) => state.todos);

  useSaveToLocalStorage(todos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </div>
  );
};
export default TodoList;
