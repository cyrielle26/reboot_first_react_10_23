import styled from "styled-components";

// the const name should be same
const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  //()if it's only one you can take them of if several 필수
  border: 10px solid black;
`;
const Box_2 = styled.div`
  width: 500px;
  height: 100px;
  background-color: teal;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor="teal"></Box>
      <Box $bgColor="salmon"></Box>
      <Box_2></Box_2>
    </div>
  );
};
