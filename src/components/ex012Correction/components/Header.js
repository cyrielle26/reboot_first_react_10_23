import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;
const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 150px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        {" "}
        <Link to={"/"}>Logo</Link>
      </Logo>
      <Nav>
        <li>
          <Link to={"/sub01"}>Menu 1</Link>
        </li>
        <li>
          <Link to={"/sub02"}> Menu2</Link>
        </li>
        {/*  <li>
          <Link to={"/sub01"}></Link>
        </li> */}
      </Nav>
    </Sheader>
  );
};
