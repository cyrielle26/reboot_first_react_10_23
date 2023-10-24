import { Header } from "./Header";
import { Section_1 } from "./Section_1";
import styled from "styled-components";

const Wrap = styled.body`
  width: 400px;
  height: 800px;
  background-color: black;
`;

export const MusicApp = () => {
  return (
    <div>
      <Wrap>
        <Header />
        <Section_1 />
      </Wrap>
    </div>
  );
};
