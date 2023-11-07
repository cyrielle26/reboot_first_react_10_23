import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <div>
      <PageTitle name={"Home"}></PageTitle>
      <h3>HOME</h3>
    </div>
  );
};
