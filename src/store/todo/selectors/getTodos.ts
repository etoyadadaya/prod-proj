import {RootState} from "../../store";

export const getTodos = (state: RootState) => state.todo.list;
