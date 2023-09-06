import {FC} from "react";

import {useAppSelector} from "../../../store/store";
import {getTodos} from "../../../store/todo/selectors/getTodos";
import {TodoItem} from "../TodoItem/TodoItem";
import {StyledUl} from "./TodoList.styled";

export const TodoList: FC = () => {
  const todos = useAppSelector(getTodos);

  return (
    <StyledUl>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </StyledUl>
  );
};
