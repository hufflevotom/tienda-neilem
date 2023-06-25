import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Nosotros from "./Nosotros/Nosotros";

const router = createBrowserRouter([
  {
    path: "",
    element: <Inicio />,
  },
  {
    path: "inicio",
    element: <Inicio />,
  },
  {
    path: "nosotros",
    element: <Nosotros />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
