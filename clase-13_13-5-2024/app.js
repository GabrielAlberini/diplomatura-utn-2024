const apellido = "Alberini";
const nombre = "Gabriel";

const password = "123test!";

console.log(nombre + apellido);

// back sticks -> interpolación
const saludo = `Hola mi nombre es ${nombre} ${apellido}`;

console.log(saludo);

const num1 = 1;
const num2 = 2;

const calculadora = `El resultado es ${num1 + num2}`;
console.log(calculadora);

// % -> resto

const manzanas = 10;
const hermanos = 3;

const resto = 10 % 3;

console.log(`Sobró ${resto} manzanas.`);

// Operadores aritmeticos (operaciones matematicas)
// Operadores de comparación (siempre da boolean)

// true o false
console.log(1 > 2);
console.log("false");

// > mayor que
// < menor que

console.log(1 > 1, "<- resultado");

// Tenemos que hacer un sistema para un boliche, deja entrar solo a mayores de edad

const joven = 18;

// >= mayor o igual que
console.log(joven >= 18, "edad joven");

// <= menor o igual que
console.log(1 <= 1);

// ¿es igual?
// = asignación
// == si es igual

// const passInDB = 123876444;

// const userPassword = prompt("Constraseña: ");
// console.log(userPassword, "contraseña del usuario");

// console.log(passInDB == userPassword, "validación de pass");

// ¿es estrictamente igual?
// 1 - comparación de valor
// 2 - comparación de tipo de dato

// console.log(1 === "1", "ejemplo 1");

// const passInDB = 123876444; // -> "123876444"

// const userPassword = prompt("Constraseña: ");
// console.log(userPassword, "contraseña del usuario");

// console.log(passInDB === userPassword, "validación de pass");

// const pass = "2kgvm46ot09d";
// console.log(typeof pass);

// != ¿es diferente a?

// const passInDb = "hola";
// const pass = prompt("Contraseña: ");

// console.log(passInDb != pass, "<- es diferente");

// ------------------------------------------------------------------------------

// Estructuras de control
// 1 - Condicionales
// 2 - Bucles

// input -> proceso -> output
// 1 + 1 -> suma -> 2 (resultado)

// Hacer un programa que nos diga que llevemos paraguas si el clima esta estrictamente lluvioso.

// Sintaxis
// Palabra reservada if
// Candición
// Scope -> alcance (zona privada)

// const edadJoven = 29;
// const edadMinima = 18;

// if (edadJoven >= edadMinima) {
//   let mensaje = "Puedes pasar";
//   console.log(mensaje);
// } else {
//   console.log("Eres menor de edad");
// }

// let mensaje = "holaaaaa";
// console.log(mensaje);

// NaN -> not a number
// undefined -> tipo de dato primitivo

// const sinValor = null;
// console.log(sinValor);

// Hacer un semaforo

// const color = "rojo";

// if (color == "verde") {
//   console.log("Puede pasar");
// } else if (color == "amarillo") {
//   console.log("Reduzca la velocidad");
// } else if (color == "rojo") {
//   console.log("No puedes pasar");
// } else {
//   console.log("Color no valido");
// }

// Condicional ternario
// const edad = 16;

// const mensaje1 = "Es mayor";
// const mensaje2 = "Es menor de edad";

// const validadorDeEdad = edad >= 18 ? mensaje1 : mensaje2;
// console.log(validadorDeEdad);

// Crear un loggin solo para la contraseña
// Que sea un string -> "flkjwmlkr423" "11231" "pepito" 1111 -> es un error
// Que la contraseña tenga como minimo 7 caracteres

// const pass = prompt("Ingrese su contraseña: "); // -> "pepito"

// if (typeof pass === "string") {
//   if (pass.length >= 7) {
//     console.log("User loggin");
//   } else {
//     console.log("La contraseña debe tener 7 caracteres como mínimo.");
//   }
// } else {
//   console.log("Solo se aceptan letras");
// }

// Operadores lógicos
// AND -> &&
// OR -> ||
// NOT -> !

// Crear un sistema que nos diga que llevemos paraguas si esta nublado Y hay viento
const clima = "nublado";
const viento = "no hay";

// Todas las condiciones tienen que ser true si o si
const validador = clima == "nublado" && viento == "si hay";
//                      true                   false

if (clima == "nublado" && viento == "si hay") {
  console.log("Lleva paraguas");
} else {
  console.log("Sali tranqui");
}

// const mensajeDePronostico = validador ? "Lleva paraguas" : "Sali tranqui";
// console.log(mensajeDePronostico);

// if (validador) {
//   console.log("Lleva paraguas");
// } else {
//   console.log("Sali tranqui");
// }

// if (validador == true) {
//   console.log("Lleva paraguas");
// } else {
//   console.log("Sali tranqui");
// }

// if (clima == "nublado") {
//   if (viento == "si hay") {
//     console.log("lleva paraguas");
//   } else {
//     console.log("Sali tranqui");
//   }
// } else {
//   console.log("Sali tranqui");
// }

// Crear un programa que le pregunte la edad a un joven. En caso de que tenga +16 puede ver la peli de terror. En caso de que no tenga 16 deberá contar con un permiso.

// const edadAdolescente = 15;
// const permiso = false;

// //            false        y       true
// if (edadAdolescente >= 16 || permiso == true) {
//   console.log("Podes ver la peli");
// } else {
//   console.log("Sos menor de edad o no tenes el permiso");
// }

// Crea un programa que le de el permiso de conducir a alguien si es que NO cuenta con multas

const patentesPagadas = true;
const curso = true;
const multas = false;

//      true           true      true
if (patentesPagadas && curso && !multas) {
  console.log("Licencia adquirida...");
} else {
  console.log("Tenes que resolver unos tramites...");
}
