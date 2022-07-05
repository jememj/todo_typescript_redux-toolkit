import { FC } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { completeTodo, removeTodo } from "../redux/todoSlice";

interface TodoProps {
  text: string;
  completed: boolean;
  id: string;
}

export const Todo: FC<TodoProps> = ({ text, completed, id }) => {
  const dispatch = useAppDispatch();

  const completeChange = () => {
    dispatch(completeTodo(id));
  };
  const deleteTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Form>
      <Input type="checkbox" onChange={completeChange} checked={completed} />
      <div style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </div>
      <Button onClick={deleteTodo}>x</Button>
    </Form>
  );
};
export default Todo;

const Form = styled.form`
  color: #fff;
  display: grid;
  align-items: center;
  grid-template-columns: 30px auto 20px;
  font-size: 18px;
  padding: 25px 10px;
  width: 350px;
  margin-top: 20px;
  background-color: rgb(95, 98, 102);
  border-radius: 10px;
  overflow-x: hidden;
`;
const Input = styled.input`
  margin-right: 10px;
`;
const Button = styled.button`
  font-size: 10px;
  padding: 4px;
  cursor: pointer;
  background: rgb(156, 154, 154);
  color: #fff;
`;
