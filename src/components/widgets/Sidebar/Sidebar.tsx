import {StyledSidebar} from "@widgets/Sidebar/Sidebar.styled";
import {NewTodoForm} from "@widgets/Todo/NewTodoForm/NewTodoForm";
import {TodoList} from "@widgets/Todo/TodoList/TodoList";
import React, {FC, useState} from "react";

import {useAppDispatch} from "../../../store/store";
import {todoActions} from "../../../store/todo/slices/todoSlice";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(todoActions.addTodo(text));
      setText("");
    }
  };

  return (
    <StyledSidebar>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </StyledSidebar>
  );
};
