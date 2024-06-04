// Funciones -> Acciones
// Tales acciones "a veces" necesitan de algo
// const alumnos = [];

// const alumno = prompt("Ingrese nombre de alumno:");
// alumnos.push(alumno);

// const alumno2 = prompt("Ingrese nombre de alumno:");
// alumnos.push(alumno2);

// const alumno3 = prompt("Ingrese nombre de alumno:");
// alumnos.push(alumno3);

// ["angel", "maría", "pepe"]
// angel, maria, pepe

// $titulo.textContent = alumnos.join(", ");

// agregarAlumno -> los nombres SIEMPRE deben ser verbos
// las funciones se vuelven codigo reutilizable
const $titulo = document.querySelector("h1");
const $parrafo = document.querySelector("p");

// 1 paso: declaración -> enseñarle a la pc una acción
function saludar() {
  const nombre = prompt("Ingrese su nombre:");
  const saludoFinal = "Hola " + nombre;

  return saludoFinal;
}

// 2 paso: invocación -> usar una función
const saludo = saludar();
$titulo.textContent = "saludo 1:  " + saludo;

const saludo2 = saludar();
$parrafo.textContent = "Saludo: " + saludo2;
