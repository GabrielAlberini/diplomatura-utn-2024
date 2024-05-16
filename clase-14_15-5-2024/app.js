// const humano = {
//   nombre: "Gabriel",
//   apellido: "Alberini",
//   edad: 29,
//   sabeConducirAuto: false,
//   saludar: () => {
//     console.log("Hola!!");
//   },
// };

// const humano2 = {
//   nombre: "Cristian",
//   apellido: "Biancalana",
//   edad: 29,
//   sabeConducirAuto: true,
//   comer: () => {
//     console.log("Tengo hambre!!");
//   },
// };

// // humano.document
// console.log("Nombre de humano2 -> ", humano2.comer());

// RESOLUCION 1
// const $parrafo = document.querySelector("p");
// const nombre = prompt("¿Como te llamas?");
// const edad = Number(prompt("¿Qué edad tienes?"));

// if (edad >= 18) {
//   $parrafo.innerHTML = `${nombre} <strong>puedes ingresar :)</strong>`;
// } else {
//   $parrafo.innerHTML = `${nombre} <strong>no puedes ingresar :(</strong>`;
// }

// RESOLUCION 2
const $respuesta = document.querySelector("p");
const $form = document.getElementById("age-form");

// Eventos -> son acciones que hace el humano

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const $nombre = document.getElementById("name");
  const $edad = document.getElementById("age");

  if ($edad.value >= 18) {
    $respuesta.innerHTML = `${$nombre.value} <strong>puedes</strong> entrar!`;

    const $strong = $respuesta.querySelector("strong");
    $strong.style.color = "green";
  } else {
    $respuesta.classList.add("rechazado");
    $respuesta.innerHTML = `${$nombre.value} <strong>no</strong> puedes ingresar :(`;
  }

  $form.reset();
});
