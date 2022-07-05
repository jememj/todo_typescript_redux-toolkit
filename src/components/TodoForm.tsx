import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/todoSlice";

const ToDoForm: FC = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="пукать тут"
        />
        <Button>пукнуть</Button>
      </form>
    </div>
  );
};

export default ToDoForm;

const Button = styled.button`
  padding: 7px;
  cursor: pointer;
  background: rgb(156, 154, 154);
  color: #fff;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  outline: none;
  background: transparent;
  margin-right: 10px;
`;
