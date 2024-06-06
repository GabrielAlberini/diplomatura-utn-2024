const $p = document.querySelector("p");

// 1° paso: declarar funciones
function sumar(n1, n2) {
  const resultado = n1 + n2;
  return resultado;
}

function restar(n1, n2) {
  const resultado = n1 - n2;
  return resultado;
}

function multiplicar(n1, n2) {
  const resultado = n1 * n2;
  return resultado;
}

function dividir(n1, n2) {
  const validador = n2 !== 0;
  if (!validador) {
    const mensaje = "No se puede dividir por 0";
    return mensaje;
  }

  // aca va a estar el resultado
  const resultado = n1 / n2;
  return resultado;
}

const numero1 = Number(prompt("Numero 1"));
const operacion = prompt(`
Ingrese + para sumar\n 
Ingrese - para restar\n 
Ingrese * para multiplicar\n 
Ingrese / para devidir\n 
`);
const numero2 = Number(prompt("Numero 2"));

// +

let resultado = 0;

if (operacion === "+") {
  resultado = sumar(numero1, numero2);
  $p.innerHTML = resultado;
} else if (operacion === "-") {
  resultado = restar(numero1, numero2);
  $p.innerHTML = resultado;
} else if (operacion === "*") {
  resultado = multiplicar(numero1, numero2);
  $p.innerHTML = resultado;
} else if (operacion === "/") {
  resultado = dividir(numero1, numero2);
  $p.innerHTML = resultado;
}
