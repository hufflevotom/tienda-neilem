import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Nosotros from "./Nosotros/Nosotros";
import Contactanos from "./Contactanos/Contactanos";
import Header from "../layout/components/Header/Header";
import Footer from "../layout/components/Footer/Footer";

export function Router() {
  return     <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="" element={<Inicio/>}/>
    <Route path="inicio" element={<Inicio/>}/>
    <Route path="nosotros" element={<Nosotros/>}/>
    <Route path="contactanos" element={<Contactanos/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>

}
