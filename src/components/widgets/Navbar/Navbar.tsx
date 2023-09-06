import {StyledNavbar} from "@widgets/Navbar/Navbar.styled";
import React, {FC} from "react";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <StyledNavbar>
      <h1>Personal Notes</h1>
    </StyledNavbar>
  );
};
