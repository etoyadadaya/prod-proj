import React, {useState} from "react";

import {NewTodoForm} from "../../components/Todo/NewTodoForm/NewTodoForm";
import {TodoList} from "../../components/Todo/TodoList/TodoList";
import {useAppDispatch} from "../../store/store";
import {todoActions} from "../../store/todo/slices/todoSlice";
import {Wrapper} from "./Home.styled";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(todoActions.addTodo(text));
      setText("");
    }
  };

  return (
    <>
      <Wrapper>
        <NewTodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <TodoList />
      </Wrapper>
    </>
  );
};

export default Home;
