montoi = Number(prompt("Ingrese la cantidad de dinero a convetir"));
monedai = prompt("Tipo de cambio del monto (ARS - Peso Argentino/USD - Dolar)");
monedaf = prompt(
  "Tipo de cambio a que se desea convertir (ARS - Peso Argentino/USD - Dolar)"
);
const dolar = 1000;

if (montoi) {
  if (montoi > 0) {
    if (monedai != monedaf) {
      if (monedai == "ARS") {
        console.log(
          "El equivalente de",
          montoi,
          monedai,
          "es de",
          montoi / dolar,
          monedaf
        );
      } else {
        console.log(
          "El equivalente de",
          montoi,
          monedai,
          "es de",
          montoi * dolar,
          monedaf
        );
      }
    } else {
      console.log(
        "Los tipos de cambio deben ser diferentes para hacer el calculo - ",
        montoi,
        monedai,
        "=",
        montoi,
        monedaf
      );
    }
  } else {
    console.log("El monto debe ser mayor a 0");
  }
} else {
  alert("Ingrese un monto valido (números)");
}
