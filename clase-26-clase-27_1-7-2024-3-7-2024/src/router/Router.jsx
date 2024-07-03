import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import AcercaDeNosotros from "../views/AcercaDeNosotros/AcercaDeNosotros.jsx";
import Peliculas from "../views/Peliculas/Peliculas.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";

const Router = () => {
  return (
    // https://wikipedia.org
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="acerca-de-nosotros" element={<AcercaDeNosotros />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
