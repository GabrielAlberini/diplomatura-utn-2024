// 1° paso: declarar variables
const $input1 = document.getElementById("num1");
const $input2 = document.getElementById("num2");
const $operacion = document.getElementById("operacion");
const $form = document.querySelector("form");
const $resultado = document.querySelector("h2");

// 2° paso: declarar funciones
function sumar() {
  const valorInput1 = Number($input1.value);
  const valorInput2 = Number($input2.value);
  const resultado = valorInput1 + valorInput2;
  return resultado;
}

function restar() {
  const valorInput1 = Number($input1.value);
  const valorInput2 = Number($input2.value);
  const resultado = valorInput1 - valorInput2;
  return resultado;
}

function multiplicar() {
  const valorInput1 = Number($input1.value);
  const valorInput2 = Number($input2.value);
  const resultado = valorInput1 * valorInput2;
  return resultado;
}

function dividir() {
  const valorInput1 = Number($input1.value);
  const valorInput2 = Number($input2.value);
  const resultado = valorInput1 / valorInput2;
  return resultado;
}

function mostrarResultado() {
  let resultado = "";
  const valorOperacion = $operacion.value;

  if (valorOperacion === "suma") {
    resultado = sumar();
  } else if (valorOperacion === "resta") {
    resultado = restar();
  } else if (valorOperacion === "multiplicacion") {
    resultado = multiplicar();
  } else {
    resultado = dividir();
  }

  $resultado.textContent = resultado;
}

// 3° paso: eventos
$form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  mostrarResultado();
});
