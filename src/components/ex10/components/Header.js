import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  z-index: 10;
`;

const MenuRight = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$isActive};
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.darkGray};
  transition: 0.5s;
`;
const MenuLeft = styled.ul`
  position: absolute;
  top: ${(props) => props.$isActive};
  right: 0;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.darkGray};
  transition: 0.5s;
`;

export const Header = () => {
  /* const [num, setNum] = useState(true); */
  const [leftResult, setLeftResult] = useState("100%");
  const [downResult, setDownResult] = useState("100%");

  const onClickMenuRight = () => {
    /* num === true ? setLeftResult(0) : setLeftResult("100%"); */
    /*  or */
    leftResult === "100%" ? setLeftResult(0) : setLeftResult("100%");
  };

  const onClickMenuLeft = () => {
    downResult === "0" ? setDownResult(0) : setDownResult("100%");
  };
  return (
    <SHeader>
      <MoreBtn onClick={onClickMenuLeft}>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>
      <MenuBtn onClick={onClickMenuRight}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>

      <MenuLeft $isActive={downResult}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </MenuLeft>

      <MenuRight $isActive={leftResult}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </MenuRight>
    </SHeader>
  );
};
