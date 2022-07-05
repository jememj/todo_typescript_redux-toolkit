import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = { todos: [] };

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<[]>) {
      state.todos = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
    completeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { setTodos, addTodo, completeTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
