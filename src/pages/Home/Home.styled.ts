import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #000000;
  gap: 50px;
`;

const List = styled.div`
  display: flex;
  width: 500px;
  justify-content: start;
  flex-direction: column;
  align-items: start;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const TodoList = styled.div`
  display: flex;
  gap: 10px;
`;

export {Form, List, TodoList, Wrapper};
