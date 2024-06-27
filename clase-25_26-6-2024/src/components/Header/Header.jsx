import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Veterinaria pepe</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
