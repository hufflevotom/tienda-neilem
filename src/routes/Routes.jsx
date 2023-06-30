import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Nosotros from "./Nosotros/Nosotros";
import Contactanos from "./Contactanos/Contactanos";
import { RUTAS } from "../constantes";

const router = createBrowserRouter([
  {
    path: RUTAS.HOME,
    element: <Inicio />,
  },
  {
    path: RUTAS.ABOUT,
    element: <Nosotros />,
  },
  {
    path: RUTAS.CONTACT,
    element: <Contactanos />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
