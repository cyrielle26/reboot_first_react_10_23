import styled from "styled-components";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h3`
  font-size: 26px;
  font-weight: 700;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 50px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/Home">LOGO</Link>
      </Logo>

      <Nav>
        <li>
          <Link to="/Home">HOME</Link>
        </li>
        <li>
          <Link to="/Login">LOGIN</Link>
        </li>
        <li>
          <Link to="/Signup">SIGNUP</Link>
        </li>
      </Nav>
    </SHeader>
  );
};
