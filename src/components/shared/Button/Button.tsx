import React, {FC, HTMLProps, ReactNode} from "react";

import {Container} from "./Button.styled";

export interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  onClick?: () => void;
  children?: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  children,
  variant,
  disabled,
}) => {
  return (
    <Container
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};
