import styled from "styled-components";
import { GlobalStyled } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
        <FontAwesomeIcon icon={faBars} />
      </MoreBtn>
      <MenuBtn></MenuBtn>
    </SHeader>
  );
};
