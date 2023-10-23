import styled from "styled-components";

import { fontSize, baseLayoutSize } from "../../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: aliceblue;
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

export const Section_1 = () => {
  return (
    <Section>
      <h3>첫번째 섹션</h3>
    </Section>
  );
};
