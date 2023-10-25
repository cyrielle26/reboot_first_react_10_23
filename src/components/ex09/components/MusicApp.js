import { Header } from "./Header";
import { Section_1 } from "./Section_1";
import { Section_2 } from "./Section_2";
import { Section_3 } from "./Section_3";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConWrap = styled.div`
  padding: 10px;
  border-radius: 30px;
  width: 400px;
  height: 780px;
  background-color: #333;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <ConWrap>
        <Header />
        <Section_1 />
        <Section_2 />
        <Section_3 />
      </ConWrap>
    </Wrap>
  );
};
