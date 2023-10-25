import styled from "styled-components";
import { GlobalStyled } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";

const SUserCon = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: #f1f1f1;
  color: ${colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  display: flex;
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgrey;
  margin-right: 10px;
`;
const NextBtn = styled.div``;

export const UserCon = () => {
  return (
    <SUserCon>
      <User>
        <Avatar />
        <h3>Pncoding</h3>
      </User>
      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SUserCon>
  );
};
