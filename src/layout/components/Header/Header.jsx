const Header = () => {
  const routes = [
    { path: "inicio", label: "Inicio" },
    { path: "nosotros", label: "Nosotros" },
    { path: "contactanos", label: "Contáctanos" },
  ];
  return (
    <header className="w-full flex flex-row px-40 justify-between items-center h-20 bg-neutral-800">
      <a href="Inicio" className="text-2xl text-red-600">
        NEILEM SAC
      </a>
      <nav>
        <ul className="flex flex-row gap-5 [&>li>a]:text-lg text-white hover:[&>li]:text-red-600">
          {routes.map((route, index) => (
            <li key={`nav-${index}`}>
              <a href={route.path} id={route.path}>
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
