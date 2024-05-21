// Array -> lista
const products = ["mochilla", "birome", "pc", "silla"];

// Agrega al final
// products.push("Pc");
// Agrega al principio
// products.unshift("teclado y mouse");
// Elimina el último
// products.pop();
// Elimina el primero
// products.shift();

products.splice(2, 1, "mesita de luz");

// console.log(products);

// products = "celular";

// console.log(products);

const listaDeInvitados = [
  "Biancalana",
  "Lopez Rodriguez",
  "Rosso",
  "Isaac",
  "Rosso",
  "Picotto",
  "Pfefferkorn",
];

const apellidoColado = "Rosso";
let cantidad = 0;

listaDeInvitados.forEach((apellido, indice) => {
  if (apellido == apellidoColado) {
    cantidad = cantidad + 1;
    if (cantidad > 1) {
      listaDeInvitados.splice(indice, 1);
      // console.log(`En la posicion ${indice} esta el colado.`);
    }
  }
});

// console.log(listaDeInvitados);

const cart = [];

const pencils = {
  material: "wood",
  price: 300,
};

cart.push(pencils);

const chair = {
  material: "steel",
  price: 5000,
};

cart.push(chair);

let validator = true;

cart.push(1);

cart.forEach((product) => {
  const typeOfData = typeof product === "object";
  if (!typeOfData) {
    validator = false;
  }
});

const calificaciones = [1, 3, 2, 8, 10];

const nuevoArrayDeAprobados = calificaciones.filter((nota) => {
  if (nota > 6) {
    return nota;
  }
});

console.log("Lista de notas", calificaciones);
console.log("Lista de notas aprovadas", nuevoArrayDeAprobados);

const alumnos = [
  { nombre: "Sofia", nota: 8 },
  { nombre: "Miguel", nota: 4 },
];

const alumnosAprobados = alumnos.filter((alumno) => {
  if (alumno.nota >= 6) {
    return alumno;
  }
});
