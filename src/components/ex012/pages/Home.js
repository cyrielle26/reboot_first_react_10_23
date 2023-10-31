import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Banner = styled.div`
  height: 80vh;
  width: 100vw;
  background: url("https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149157312.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698364800&semt=ais")
    no-repeat center/cover;
`;

const MainSection1 = styled.div`
  width: 100vw;
  padding: 80px 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Con = styled.div`
  width: 30%;
  height: 600px;
  margin: 20px;
  background: url("https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149157312.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698364800&semt=ais")
    no-repeat center/cover;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <PageTitle name={"Home"}> </PageTitle>
      <Banner></Banner>
      <MainSection1>
        <Con>
          <Link to={"/sub01"}></Link>
        </Con>
        <Con>
          <Link to={"/sub02"}></Link>
        </Con>
      </MainSection1>
    </Wrap>
  );
};
