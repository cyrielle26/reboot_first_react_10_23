import styled from "styled-components";
import { fontSize, baseLayoutSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          }
        ></Con>
        <Con
          $bgImg={
            "https://i.pinimg.com/originals/13/e6/98/13e698272fcac9c607dd11bf7b866555.jpg"
          }
        ></Con>
        <Con
          $bgImg={
            "https://i.pinimg.com/474x/35/88/13/3588132c5ba6764c62aa47ca0978d5ce.jpg"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};
