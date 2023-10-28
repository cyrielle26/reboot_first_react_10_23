import styled from "styled-components";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

const Banner = styled.div`
  height: 80vh;
  background-color: lightslategray;
`;
const Section = styled.div`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 45%;
  height: 600px;
  background-color: lightslategray;
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
    <div>
      <Banner></Banner>

      <Section>
        <Con>
          <Link to={"/sub01"}></Link>
        </Con>
        <Con>
          <Link to={"/sub02"}></Link>
        </Con>
      </Section>
    </div>
  );
};
