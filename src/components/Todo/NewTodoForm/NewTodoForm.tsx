import {FC} from "react";

import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {StyledLabel} from "./NewTodoForm.styled";

interface NewTodoFormProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

export const NewTodoForm: FC<NewTodoFormProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  return (
    <StyledLabel htmlFor={"input"}>
      <Input
        type={"text"}
        name={"input"}
        id={"input"}
        placeholder={"New TODO"}
        value={value}
        onChange={e => updateText(e.target.value)}
      />
      <Button onClick={handleAction}>Add TODO</Button>
    </StyledLabel>
  );
};
