import styled from "styled-components";
import { fontSize, baseLayoutSize } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <SHeader>
      <button onClick={toggleMenu}>=</button>
    </SHeader>
  );
};
