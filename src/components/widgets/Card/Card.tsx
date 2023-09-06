import {Button} from "@shared/Button/Button";
import {StyledDiv, StyledP, StyledSpan} from "@widgets/Card/Card.styled";
import React, {FC} from "react";

import {useAppDispatch} from "../../../store/store";
import {todoActions} from "../../../store/todo/slices/todoSlice";

interface CardProps {
  title: string;
  description: string;
  date: string;
}

export const Card: FC<CardProps> = ({title, description, date}) => {
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    dispatch(todoActions.removeTodo(date));
  };

  return (
    <StyledDiv>
      <StyledP>{title}</StyledP>
      <StyledSpan>{description}</StyledSpan>
      <StyledSpan>{date}</StyledSpan>
      <Button
        variant={"secondary"}
        onClick={handleOnClick}
      >
        X
      </Button>
    </StyledDiv>
  );
};
