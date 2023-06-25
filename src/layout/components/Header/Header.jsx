const Header = () => {
  const routes = [
    { path: "inicio", label: "Inicio" },
    { path: "nosotros", label: "Nosotros" },
  ];
  return (
    <header className="w-full flex flex-row px-40 justify-between items-center h-20">
      <a href="Inicio" className="text-2xl text-red-800">
        NEILEM SAC
      </a>
      <nav>
        <ul className="flex flex-row gap-5 [&>li>a]:text-lg hover:[&>li]:text-red-700">
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
