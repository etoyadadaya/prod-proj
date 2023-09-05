import React, {FC, HTMLProps, ReactNode} from "react";

import {Container} from "./Button.styled";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  children?: ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  children,
  color,
  disabled,
}) => {
  return (
    <Container
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
