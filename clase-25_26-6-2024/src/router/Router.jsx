import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Proyectos from "../views/Proyectos/Proyectos.jsx";
import Contacto from "../views/Contacto/Contacto.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
