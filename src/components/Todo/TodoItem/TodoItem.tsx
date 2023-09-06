import React, {FC} from "react";

import {useAppDispatch} from "../../../store/store";
import {todoActions} from "../../../store/todo/slices/todoSlice";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {StyledLi, StyledSpan} from "./TodoItem.styled";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

export const TodoItem: FC<TodoItemProps> = ({id, title, completed}) => {
  const dispatch = useAppDispatch();

  const handleOnChange = () => {
    dispatch(todoActions.toggleComplete(id));
  };

  const handleOnClick = () => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <StyledLi>
      <Input
        type={"checkbox"}
        checked={completed}
        onChange={handleOnChange}
      />
      <StyledSpan>{title}</StyledSpan>
      <Button onClick={handleOnClick}>Delete</Button>
    </StyledLi>
  );
};
