import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";
import { Header } from "../components/Header";
import { MainSection1 } from "../components/MainSection1";
import { MainSection2 } from "../components/MainSection2";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Home = () => {
  return (
    <Wrap>
      <PageTitle name={"Home"}> </PageTitle>
      <Header></Header>
      <MainSection1></MainSection1>
      <MainSection2></MainSection2>
    </Wrap>
  );
};
