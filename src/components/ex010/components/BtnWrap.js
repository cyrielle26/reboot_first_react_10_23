import styled from "styled-components";
import { GlobalStyled } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForwardFast,
  faPause,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  font-size: 18px;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>

      <li>
        <FontAwesomeIcon icon={faForwardFast} />
      </li>
    </SBtnWrap>
  );
};
