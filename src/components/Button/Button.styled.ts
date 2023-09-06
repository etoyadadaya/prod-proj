import styled, {css} from "styled-components";

import {IButtonProps} from "./Button";

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

export const Container = styled.button<IButtonProps>`
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  outline: none;
  transition: all 0.2s;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  align-items: center;

  ${props => props.color && COLOR[props.color]}
  ${props => props.disabled && DISABLED}
`;
