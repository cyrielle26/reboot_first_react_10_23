import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForwardFast,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  font-size: 18px;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
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
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SBtnWrap>
  );
};
