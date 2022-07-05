import { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ToDoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <ToDoForm />
      <TodoList />
    </Container>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color:rgb(192, 207, 211) !important;
  }
`;
const Container = styled.div`
  padding-top: 50px;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
