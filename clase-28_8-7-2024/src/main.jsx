import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import Home from "./views/Home/Home.jsx";
import Contacto from "./views/Contacto/Contacto.jsx";
import { ContadorProvider } from "./context/ContadorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContadorProvider>
      <UserProvider>
        <Home />
        <Contacto />
      </UserProvider>
    </ContadorProvider>
  </React.StrictMode>
);
