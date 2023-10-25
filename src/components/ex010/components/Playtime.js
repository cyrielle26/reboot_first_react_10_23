import styled from "styled-components";
import { GlobalStyled } from "../../../GlobalStyled";

const SPlayTime = styled.div``;
const Progress = styled.div`
  height: 6px;
  background-color: #555;
  border-radius: 3px;
`;
const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: lightgreen;
`;
const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const Playtime = () => {
  return (
    <SPlayTime>
      <Progress>
        <Bar />
      </Progress>
      <TimeWrap>
        <p>00:03</p>
        <p>03:40</p>
      </TimeWrap>
    </SPlayTime>
  );
};
