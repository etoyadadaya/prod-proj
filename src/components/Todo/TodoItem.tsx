import React, {FC} from "react";

import {useAppDispatch} from "../../store/store";
import {todoActions} from "../../store/todo/slices/todoSlice";

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
    <li>
      <input
        type={"checkbox"}
        checked={completed}
        onChange={handleOnChange}
      />
      <span>{title}</span>
      <button onClick={handleOnClick}>Delete</button>
    </li>
  );
};
