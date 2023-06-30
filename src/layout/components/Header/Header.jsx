import { NavLink } from "react-router-dom";
import { RUTAS } from "../../../constantes";

const Header = () => {
  const routes = [
    { path: RUTAS.HOME, label: "Inicio" },
    { path: RUTAS.ABOUT, label: "Nosotros" },
    { path: RUTAS.CONTACT, label: "Contáctanos" },
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
              {/* <a href={route.path} id={route.path}>
                {route.label}
              </a> */}
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
