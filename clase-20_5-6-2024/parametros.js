const $parrafo = document.querySelector("p");

// 1 paso: declaración de función "enseñar func"
// 2 paso: invocación de función "hacer una acción"

// Arrow function -> no tiene acceso a this
const sumar = () => {};

// funcion nombrada
function sumar2() {}

// Restar
const restar = () => {
  // const n1 = Number(prompt("Número 1"));
  // const n2 = Number(prompt("Número 2"));
  // return n1 - n2;
};

const resultado = restar();
$parrafo.textContent = resultado;

const precioP1 = 100;
const precioP2 = 50;

const costoTotal = restar();

// -----------------------------------------

// Parametros -> variables de uso interno y secreto de la función
const saludar = (nombre = "sin nombre") => {
  const saludo = `Hola ${nombre}`;
  return saludo;
};

// En la invocación se pasa el valor a los parametros
const saludo = saludar("Gabo");
$parrafo.innerHTML = saludo;

const saludo2 = saludar("Nicolás");
$parrafo.innerHTML = saludo2;

// --------------------

// Valor por defecto en parámetro
const saludo3 = saludar("Pepito");
$parrafo.innerHTML = saludo3;

// -------------------

const multiplicar = (n1 = 0, n2 = 0) => {
  const operacion = n1 * n2;
  return operacion;
};

const n1 = Number(prompt("n1"));
const n2 = Number(prompt("n2"));

const resultado2 = multiplicar(n1, n2);
$parrafo.innerHTML = "Resultado " + resultado2;
