import {FC, HTMLProps, ReactNode} from "react";

import {StyledInput} from "./Input.styled";

interface InputProps extends HTMLProps<HTMLInputElement> {
  placeholder?: string;
  variant?: "primary" | "secondary";
  children?: ReactNode;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
}

export const Input: FC<InputProps> = ({
  placeholder,
  children,
  value,
  onChange,
  type,
}) => {
  return (
    <StyledInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    >
      {children}
    </StyledInput>
  );
};
