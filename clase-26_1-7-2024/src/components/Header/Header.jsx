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
          <li>Home</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
