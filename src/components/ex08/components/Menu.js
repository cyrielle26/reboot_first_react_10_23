import styled from "styled-components";
import { fontSize, baseLayoutSize } from "../../../GlobalStyled";
import { useState } from "react";

const HiddenMenu = HiddenMenu.styled`
`;

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HiddenMenu className={menuOpen ? "visible" : ""}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </HiddenMenu>
  );
};
