import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
const Section = styled.div`
  width: 360px;
  height: 70px;
  margin: 18px;
  background-color: gainsboro;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 12px;
`;
const ProfilePic = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("https://assets-global.website-files.com/64a6ab539eaa6037aed9e7b5/64fff900cb19102a6a781389_Vieuws.webp")
    no-repeat center / cover;
`;
const UserName = styled.div`
  color: #555;
  font-size: 15px;
`;

export const Section_3 = () => {
  return (
    <Section>
      <UserWrap>
        <ProfilePic></ProfilePic>
        <UserName>patiname</UserName>
      </UserWrap>
      <FontAwesomeIcon
        icon={faForwardStep}
        style={{ color: "#3c3d3e", padding: "15px", width: "12px" }}
      />
    </Section>
  );
};
