import {FC} from "react";

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
    <label>
      <input
        placeholder={"new todo"}
        value={value}
        onChange={e => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add TODO</button>
    </label>
  );
};
