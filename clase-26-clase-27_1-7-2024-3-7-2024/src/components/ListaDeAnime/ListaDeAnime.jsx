import { useState, useEffect } from "react";
import "./ListaDeAnime.css";

const ListaDeAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    try {
      const fetchingData = async () => {
        const response = await fetch("https://ghibliapi.vercel.app/films/");
        const data = await response.json();
        setTimeout(() => {
          setAnimes(data);
          setLoader(false);
        }, 5000);
      };

      fetchingData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //  true
  if (loader) {
    return <p>Cargando</p>;
  }

  return (
    <section>
      <h1>Peliculas de Studio Ghibli</h1>
      <article>
        {animes.map((anime) => {
          return (
            <div key={anime.id}>
              <h2>{anime.title}</h2>
              <img
                style={{ width: "80px" }}
                src={anime.image}
                alt={"Foto de " + anime.title}
              />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default ListaDeAnime;
