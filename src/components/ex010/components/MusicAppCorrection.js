import {
  faBackward,
  faForwardStep,
  faPause,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { PlayTime } from "./Playtime";
import { BtnWrap } from "./BtnWrap";
import { colors } from "../../../GlobalStyled";

const Wrap = styled.div`
  height: 100vh;
  display: flex;

  align-items: center;
  background-color: #555;
  color: white;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #1d1d1d;
  padding: 50px 20px;
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
