import { useState } from "react";
import { Header } from "../ex08/components/Header";
import { createGlobalStyle } from "styled-components";

export const Ex08 = () => {
  //hook
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Header>
        <button onClick={toggleMenu}>=</button>
      </Header>
    </div>
  );
};
