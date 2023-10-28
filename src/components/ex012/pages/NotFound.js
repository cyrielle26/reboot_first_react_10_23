import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";

export const NotFound = () => {
  return (
    <div>
      <PageTitle name={"Not Found"}></PageTitle>
    </div>
  );
};
