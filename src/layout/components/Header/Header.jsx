import { PHONE_NUMBER } from "../../../constantes";

const Header = () => {
  const routes = [
    { path: "inicio", label: "Inicio" },
    { path: "nosotros", label: "Nosotros" },
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
          <li>
            <a
              href={`https://api.whatsapp.com/send?phone=51${PHONE_NUMBER}&text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.`}
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 px-4 py-2 rounded-md"
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
