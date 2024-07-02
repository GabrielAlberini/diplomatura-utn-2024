import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListaDeAnime from "./components/ListaDeAnime/ListaDeAnime.jsx";
import Layout from "./components/Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <ListaDeAnime />
    </Layout>
  </React.StrictMode>
);
