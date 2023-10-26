import styled from "styled-components";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { Playtime } from "./Playtime";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #555;
  color: white;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #1d1d1d;
  padding: 50px 20px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

export const MusicAppCorrection = () => {
  return (
    <Wrap>
      <Container>
        <Header />
        <Cover />
        <Playtime />
        <BtnWrap />
        <UserCon />
      </Container>
    </Wrap>
  );
};
