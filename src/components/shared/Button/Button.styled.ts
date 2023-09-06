import styled, {css} from "styled-components";

import {IButtonProps} from "./Button";

const VARIANT = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    display: flex;
    position: absolute;
    right: 20px;
    text-align: center;
    justify-items: center;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    height: 25px;
    width: 25px;
    color: #000;
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

  ${props => props.variant && VARIANT[props.variant]}
  ${props => props.disabled && DISABLED}
`;
