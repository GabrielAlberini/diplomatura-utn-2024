// const frutas = ["naranja", "manzana"];

// // Return implicito
// const frutasFiltradas = frutas.filter((fruta) => fruta.startsWith("n"));
// console.log(frutasFiltradas);

// // Return explicito
// const frutasFiltradas2 = frutas.filter((fruta) => {
//   if (fruta.startsWith("n")) {
//     return fruta;
//   }
// });
// console.log(frutasFiltradas2, "aca");

// const alumnos = [
//   {
//     name: "brunito",
//     edad: 11,
//   },
//   {
//     name: "sofita",
//     edad: 89,
//   },
// ];

// const alumnosMayoresDeEdad = alumnos
//   .filter((alumno) => alumno.edad > 17)
//   .map((alumno) => alumno.name.toUpperCase());

// console.log(alumnosMayoresDeEdad);

const animales = ["m-puma", "a-guacamayo", "r-cocodrilo", "a-gorrión"];

const aves = animales
  .filter((animal) => animal.startsWith("a-"))
  .map((ave) => ave.slice(2));

console.log(aves, "array del mapeo");

// A partir de la siguiente lista de producto, guardarlos en array diferentes segun el número de SKU en base a son par o impar

const productos = [
  {
    name: "zapatilla",
    sku: "188344505",
  },
  {
    name: "pc",
    sku: "930478420",
  },
];

// Nos dicen desde stock que tienen dos racks, uno para productos de SKU par y otro para SKU impar
