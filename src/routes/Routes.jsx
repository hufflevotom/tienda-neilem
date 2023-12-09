import { Route, Routes as RRoutes } from "react-router-dom";

import { RUTAS } from "../constantes";

import Inicio from "./Inicio/Inicio";
import Nosotros from "./Nosotros/Nosotros";
import Contactanos from "./Contactanos/Contactanos";
import Niveles from "./Niveles/Niveles";

function Routes() {
  return (
    <RRoutes>
      <Route path={RUTAS.HOME} element={<Inicio />} />
      <Route path={RUTAS.ABOUT} element={<Nosotros />} />
      <Route path={RUTAS.CONTACT} element={<Contactanos />} />
      <Route path={RUTAS.NIVELES} element={<Niveles />} />
    </RRoutes>
  );
}

export default Routes;
