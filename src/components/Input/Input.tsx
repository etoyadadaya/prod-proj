import {FC, HTMLProps, ReactNode} from "react";

import {StyledInput} from "./Input.styled";

interface IInputProps extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  variant?: "primary" | "secondary";
  children?: ReactNode;
}

export const Input: FC<IInputProps> = ({placeholder, children}) => {
  return <StyledInput placeholder={placeholder}>{children}</StyledInput>;
};
