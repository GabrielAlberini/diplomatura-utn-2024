import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img
        src="./logo.png"
        alt="imagen de logo
      "
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/peliculas">Peliculas</Link>
          </li>
          <li>
            <Link to="/acerca-de-nosotros">Acerca de nosotros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
