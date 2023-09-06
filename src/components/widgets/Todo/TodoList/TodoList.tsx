import {Card} from "@widgets/Card/Card";
import {FC} from "react";

import {useAppSelector} from "../../../../store/store";
import {getTodos} from "../../../../store/todo/selectors/getTodos";
import {StyledUl} from "./TodoList.styled";

export const TodoList: FC = () => {
  const todos = useAppSelector(getTodos);

  return (
    <StyledUl>
      {todos.map(todo => (
        <Card
          key={todo.id}
          date={todo.id}
          title={todo.title}
          description={"This is Description"}
        />
      ))}
    </StyledUl>
  );
};
