import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  margin-bottom: 20px;
  width: 270px;
  height: 300px;
  border-radius: 30px;
  background: url("https://assets-global.website-files.com/64a6ab539eaa6037aed9e7b5/64fff900cb19102a6a781389_Vieuws.webp")
    no-repeat center / cover;
  box-shadow: 5px 15px 10px rgba(0, 0, 0.5, 0.5);
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  line-height: 25px;
  h2 {
    font-size: 18px;
    font-weight: 900;
    word-spacing: 1%;
  }
  h3 {
    font-size: 12px;
    font-weight: 300;
  }
`;

const RecordBar = styled.div`
  margin-top: 18px;
  width: 350px;
  height: 4px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  h4 {
    margin-top: 18px;
    font-size: 12px;
  }
`;
export const Section_1 = () => {
  return (
    <Section>
      <Box> </Box>

      <Title>
        <h2>Blue bird</h2>
        <h3>Pick Dreams</h3>
      </Title>
      <RecordBar>
        <h4>00:03</h4>
        <h4>03:43</h4>
      </RecordBar>
    </Section>
  );
};
