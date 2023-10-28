import styled from "styled-components";

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
  li {
    margin: 0 120px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>Logo</Logo>
      <MenuWrap>
        <li>Menu 1</li>
        <li>Menu 2</li>
      </MenuWrap>
    </Sheader>
  );
};
