import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  margin: 70px;
  width: 300px;
  height: 320px;
  border-radius: 30px;
  background: url("https://assets-global.website-files.com/64a6ab539eaa6037aed9e7b5/64fff900cb19102a6a781389_Vieuws.webp")
    no-repeat center / cover;
`;

export const Section_1 = () => {
  return (
    <Section>
      <Box> </Box>

      {/* <Title>
        <h2>Blue bird</h2>
        <h3>Pick Dreams</h3>
      </Title>
      <RecordBar></RecordBar> */}
    </Section>
  );
};
