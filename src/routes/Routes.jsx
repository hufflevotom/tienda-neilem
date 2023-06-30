import { Route, Routes as RRoutes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Nosotros from "./Nosotros/Nosotros";
import Contactanos from "./Contactanos/Contactanos";
import { RUTAS } from "../constantes";

function Routes() {
  return (
    <RRoutes>
      <Route path={RUTAS.HOME} element={<Inicio />} />
      <Route path={RUTAS.ABOUT} element={<Nosotros />} />
      <Route path={RUTAS.CONTACT} element={<Contactanos />} />
    </RRoutes>
  );
}

export default Routes;
