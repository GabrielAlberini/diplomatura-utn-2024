const $main = document.querySelector("main");

fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data.results;
    console.log(personajes);

    personajes.forEach((personaje) => {
      $main.innerHTML += `<div>
      <h4>${personaje.name}</h4>
      <img src="${personaje.image}" alt="imagen de ${personaje.name}">
      <p>Gender: ${personaje.gender}</p>
      <p>Specie: ${personaje.species}</p>
      <p>Status: ${personaje.status}</p>
      </div>
      `;
    });
  });
