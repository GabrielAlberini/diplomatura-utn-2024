// Tipo de datos

// Tipos primitivos:
// string, number, boolean, undefined, null, NaN

// Tipos complejo o compuesto:
// array, object

// Variables

// let, const

// let -> se puede reasignar
// let name = "Gabriel"
// name = 12

// const -> no se puede reasignar
// const name = "Gabriel"
// name = 12 -> da error

// const frutas = ["pera", "manzana"];
// frutas.push("ciruela");
// console.log(frutas);

// Operadores aritméticos
// + - * / %

// Saber si un numero es par o impar

// if (11 % 2 === 0) {
//   console.log("es par");
// } else {
//   console.log("es impar");
// }

// Operadores de comparación
// Todos dan como resultado un boolean

// >
// <
// >=
// <=
// ==
// ===
// !=

// Operadores lógicos

// AND -> &&
// OR -> ||
// NOT -> !

// Crear un programa que deje pasar a mayores de 13 o menores que cuenten con permiso

// const edad = 13;
// const permiso = false;

// if (edad >= 13 || permiso === true) {
//   console.log("Puedes pasar");
// } else {
//   console.log("No peudes pasar");
// }

// const nombre = prompt("Ingrese su nombre");

// if (!nombre) {
//   console.log("No hay dato");
// } else {
//   console.log("hay dato", nombre);
// }

// const cantOfProducts = 0;

// if (!cantOfProducts) {
//   console.log("No hay productos");
// }

// Falsy
// false, 0, "", null, undefined, y NaN

// Condicionales

// if -> entra al scope (zona privada) cuando la condicion se resuelve como true
// if(){}

// Operador ternario
// condicion ? true : false
// 2 > 3 ? console.log("Es mayor") : console.log("Es menor");

// Manipulación de DOM -> html

// document.querySelector() -> .clase, #id, nombreDeEtiqueta
// document.getElementById("id")

// Escuchador de eventos
// $form.addEventListener("aca va el evento que quiero escuchar", (evento) => {})

// Método
// Función que ofrese JS para cada tipo de dato y necesidad

// const nombre = "Cecilia";
// const nombreEnMinuscula = nombre.toLowerCase();
// console.log(nombreEnMinuscula);

// const numero = 100.5;
// const fixed = numero.toFixed();
// console.log(fixed);

// const colores = ["azul", "rojo"];
// colores.push("amarillo");
// console.log(colores);
// console.log(colores.length);

// Métodos de array
// Filter -> CREA un nuevo array con todos los elementos que validen como true la condición

// const alumnos = ["alan", "martín", "ana"];

// const nuevaLista = [];

// alumnos.forEach((alumno) => {
//   if (alumno.startsWith("a")) {
//     nuevaLista.push(alumno);
//   }
// });

// const nuevaLista2 = alumnos.filter((alumno) => {
//   if (alumno.startsWith("a")) {
//     return alumno;
//   }
// });

// console.log(nuevaLista2);

// find -> RETORNA (guarda) solo la primer coincidencia

// const peliculas = ["et", "titanic", "el exorcista", "et"];

// const peliculaEncontrada = peliculas.find((pelicula) => {
//   if (pelicula === "et") {
//     return pelicula;
//   }
// });

// console.log(peliculaEncontrada);

// const numeros = [1, 4, 5, 88, 999, 20001, 123567890];

// const numeroMasGrande = numeros.find((numero) => {
//   if (numero > 20000) {
//     return numero;
//   }
// });

// console.log(numeroMasGrande);

// map -> CREA un nuevo array con la modificación de cada elemento

// const apellidos = ["perez", "dominguez", "filipa"];
// const listaDeApellidosEnMayus = [];
// listaDeApellidosEnMayus.push(apellidos[0].toUpperCase());
// listaDeApellidosEnMayus.push(apellidos[1].toUpperCase());
// listaDeApellidosEnMayus.push(apellidos[2].toUpperCase());

// console.log(listaDeApellidosEnMayus);

// const listaDeApellidosEnMayus = apellidos.map((apellido) => {
//   return apellido.toUpperCase();
// });

// console.log(listaDeApellidosEnMayus, "<- mapeado");

// Manipulación de estilos css con js
// const $titulo = document.querySelector("h1");
// $titulo.style.textTransform = "lowercase";
// $titulo.style.color = "red";

// Manipulación de clases html con js
// $titulo.classList.add("prueba");
// $titulo.classList.remove("prueba");

// const numeros = [1, 2, 3];

// const multiplosDeDos = numeros.map((numero) => {
//   return numero * 2;
// });

// numeros.forEach((numero) => {
//   console.log(numero * 3);
// });

// Encontrar el número mas grande
// const numeros = [100, 2000, 3];
// let numeroMasGrande = numeros[0];

// numeros.forEach((numero) => {
//   if (numero > numeroMasGrande) {
//     numeroMasGrande = numero;
//   }
// });

// console.log(numeroMasGrande);
