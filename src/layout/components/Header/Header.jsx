const Header = () => {
  return (
    <header>
      <div className="menu logo-nav">
        <a href="Inicio" className="logo">
          NEILEM SAC
        </a>
        <nav className="navigation">
          <ul>
            <li>
              <a href="nosotros">Nosotros</a>
            </li>
            <li>
              <a href="contacto.html">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
