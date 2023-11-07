import styled from "styled-components";
import { Link } from "react-router-dom";

const Sheader = styled.header`
  width: 100vw;
  height: 18vh;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkgray;
`;

const Logo = styled.div`
  font-size: 60px;
  font-weight: 900;
  padding: 0 50px;
  a {
    color: hotpink;
  }
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 800;
  li {
    padding: 10px 50px;
  }
  a {
    color: hotpink;
  }
`;
export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>Logo</Link>
      </Logo>

      <Nav>
        <li>
          <Link to={"/Login"}>Login</Link>
        </li>
        <li>
          <Link to={"/Signup"}>Signup</Link>
        </li>
      </Nav>
    </Sheader>
  );
};
