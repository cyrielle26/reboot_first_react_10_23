import styled from "styled-components";
import { Link } from "react-router-dom";

const Sheader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 800;
  li {
    margin: 0 120px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>Logo</Link>
      </Logo>
      <MenuWrap>
        <li>
          {" "}
          <Link to={"/sub01"}>Menu 1</Link>
        </li>
        <li>
          {" "}
          <Link to={"/sub02"}>Menu 2</Link>
        </li>
      </MenuWrap>
    </Sheader>
  );
};
