/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./Peliculas.css";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  return (
    <Layout>
      <section className="section-peliculas">
        <div>
          <img src="./logo_dragonball.webp" alt="imagen de logo de dbz" />
        </div>
        <h1>The Dragon Ball API</h1>
        <article className="personajes">
          <div className="personaje">
            <div className="personaje-cont-img">
              <img
                src="https://dragonball-api.com/characters/goku_normal.webp"
                alt=""
              />
            </div>
            <div className="personaje-data">
              <h3>Nombre</h3>
              <h4>Genero</h4>
              <h3>Base ki</h3>
              <h4>1000000</h4>
              <h3>Total KI:</h3>
              <h4>90 Septillion</h4>
              <h3>Afilliation:</h3>
              <h4>Z Fighter</h4>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Peliculas;
