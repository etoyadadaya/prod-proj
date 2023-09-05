import {FC} from "react";

import {useAppSelector} from "../../store/store";
import {getTodos} from "../../store/todo/selectors/getTodos";
import {TodoItem} from "./TodoItem";

export const TodoList: FC = () => {
  const todos = useAppSelector(getTodos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          {...todo}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
