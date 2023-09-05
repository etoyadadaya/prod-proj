import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const todos =
  localStorage.getItem("list") != null
    ? JSON.parse(localStorage.getItem("list") as string)
    : [];

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: todos,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });

      localStorage.setItem(
        "list",
        JSON.stringify(state.list.map(todo => todo))
      );
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);

      localStorage.setItem(
        "list",
        JSON.stringify(state.list.map(todo => todo))
      );
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }

      localStorage.setItem(
        "list",
        JSON.stringify(state.list.map(todo => todo))
      );
    },
  },
});

export const {actions: todoActions} = todoSlice;
export const {reducer: todoReducer} = todoSlice;
