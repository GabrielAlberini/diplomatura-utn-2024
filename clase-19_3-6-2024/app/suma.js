const $titulo = document.querySelector("h1");
const $boton = document.querySelector("button");

//Declaración de función
function sumar() {
  const num1 = Number(prompt("Ingrese el primer número:"));
  const num2 = Number(prompt("Ingrese el segundo número:"));

  return num1 + num2;
}

function mostrarEnDOM() {
  $titulo.textContent = sumar();
}

$boton.addEventListener("click", mostrarEnDOM);
