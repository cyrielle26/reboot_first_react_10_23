import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrap = styled.body`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const SHeader = styled.header`
  padding: 20px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftBtn = styled.h3`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
const RightBtn = styled.h3`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 1px #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
export const Header = () => {
  return (
    <SHeader>
      <LeftBtn>
        <h3>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: "#050505" }} />
        </h3>
      </LeftBtn>
      <RightBtn>
        <h3>
          <FontAwesomeIcon icon={faBars} style={{ color: "#ffffff" }} />
        </h3>
      </RightBtn>
    </SHeader>
  );
};
