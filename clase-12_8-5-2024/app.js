/*
Esto 
es 
un 
comentario
multilinea
*/

// Esto es un comentario de solo una linea

// Datos primitivos
// texto -> string -> cadena de caracteres
// numeros -> number -> positivos, negativos y los decimales
// lógicos -> boolean -> false o true

// Datos compuestos o complejos
// listas -> array -> lista de datos, cada elemento tiene una posición
// colección -> objeto -> colección de datos que identifica a "algo"

// Variable
// Las variables son cajitas que guardan información
// let -> se puede reasignar
// const -> NO se puede reasignar
// var -> se puede reasignar (no se usa más desde 2015)

// Declaración y asignación
// let username = "Gabriel";
// console.log(username);

// Declaración
// let lastname;

// Asignación
// lastname = "Alberini";
// console.log(lastname);

// Javascript es un lenguaje de programación de tipado debil
// Reasignar tipos de datos
// lastname = 1994;
// console.log(lastname);

// Las variables de tipo const no se pueden reasignar
const yearOfBirth = 1994;
// yearOfBirth = 2000;
// console.log(yearOfBirth);

// Las variables de tipo const deben inicializarse
// const currentYear;

const currentYear = 2023;

const age = currentYear - yearOfBirth;

// Cammelcase -> camello
// total price

// const totalPriceInCart = 0;

// Snakecase
// const total_price_in_cart = 0;

// String
// let string = "cadena de texto acepta caracteres $ % = 45456";
// Template string
// let string3 = `Esto es tambien un string ${age}`;

// Number
// let numero1 = 2;
// let numero2 = -1;
// let numero3 = 0.3;

// Boolean
// let verdadero = true;
// let falso = false;

// Objeto
// let arandela = {
//   color: "marrón",
//   edad: 6,
//   raza: "delmon",
//   comidaFavorita: "todo",
// };

// Array
// let listaDeColores = ["azul", "rojo", "amarrillo"];
// let peluqueriaCanina = [arandela];

// Ingresar a una posición en un array
// console.log(peluqueriaCanina);

// console.log(`La edad de arandela es: ${arandela.edad} años.`);

// let edadDePerroAHumano = arandela.edad * 7;

// console.log(
//   `La edad de arandela convertida a humano es ${edadDePerroAHumano} años.`
// );

// let numero1 = Number(prompt()); // 1 -> "1"
// let numero2 = Number(prompt()); // 2 -> "2"

// let resultado = numero1 + numero2;

// console.log(resultado);

// Concatenación de string
// let palabra1 = "Hola ";
// let palabra2 = "mundo.";

// console.log(palabra1 + palabra2);

// let nombrePrincipal = prompt("Ingrese su nombre");
// console.log("Hola " + nombrePrincipal);

let radio = Number(prompt("Ingrese el radio:"));
let areaCirculo = Math.PI * radio ** 2;

console.log(`El area es de: ${areaCirculo} m2.`);
