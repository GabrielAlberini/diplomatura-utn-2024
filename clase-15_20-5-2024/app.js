const $form = document.querySelector("form");
const $name = document.getElementById("name");
const $age = document.getElementById("age");
const $email = document.getElementById("email");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const vName = $name.value;
  let vAge = $age.value;
  const vEmail = $email.value;

  const minLengthName = 2;
  const maxLengthName = 12;

  if (vName.length >= minLengthName && vName.length <= maxLengthName) {
    console.log("Validado: cumple las longitudes requeridas");
  } else {
    console.log("No validado!");
  }

  if (!isNaN(vAge)) {
    console.log("Validado: la edad son solo numeros");
  } else {
    console.log("No validado: incluye solo numeros");
  }

  if (vAge >= 18 && vAge <= 60) {
    console.log("Validado: estas en la franja de edad que buscamos");
  } else {
    console.log("No validado: no estas en la franja de edad que buscamos");
  }

  if (vEmail.endsWith("gmail.com")) {
    console.log("validado: Es un email");
  } else {
    console.log("No validado: no es un email");
  }
});
