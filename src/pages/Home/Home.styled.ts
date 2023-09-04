import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: #000000;
`;

const Button = styled.button<typeof HTMLButtonElement>`
  /* Adapt the colors based on primary prop */
  background: none;
  color: black;

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export {Button, Wrapper};
