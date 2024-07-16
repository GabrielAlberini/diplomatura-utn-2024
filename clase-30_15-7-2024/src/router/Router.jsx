import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home.jsx";
import Projects from "../views/Projects/Projects.jsx";
import Contact from "../views/Contact/Contact.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
