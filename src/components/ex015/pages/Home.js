import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

const Banner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #777;
  h3 {
    font-size: 100px;
    font-weight: 700;
    color: hotpink;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner>
        <h3>HOME</h3>
      </Banner>
    </div>
  );
};
