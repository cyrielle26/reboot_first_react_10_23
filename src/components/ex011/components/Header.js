import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to={"/"}>LOGO</Link>
        </div>

        <ul>
          <li>
            <Link to={"/sub01"}>SUB1</Link>
          </li>
          <li>
            <Link to={"/sub02"}>SUB2</Link>
          </li>
        </ul>
      </header>

      <hr />
    </div>
  );
};
