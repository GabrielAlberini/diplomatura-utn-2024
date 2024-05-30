// Referenciar elementos HTML
const $input = document.getElementById("filter");
const $button = document.getElementById("send-filter");
const $listOfNames = document.querySelector("ul");
const $message = document.querySelector("h3");

// Fe
const names = ["Felipe", "Claudio", "Ignacio"];

names.sort().forEach((name) => {
  $listOfNames.innerHTML += `<li>${name}</li>`;
});

// Callback es una función que se ejecuta despues de que pasa "algo"

const handleInput = (event) => {
  const filteredNames = names.filter((name) => {
    const lowerCaseName = name.toLowerCase();
    const lowerCaseInputValue = $input.value.toLowerCase();

    if (lowerCaseName.includes(lowerCaseInputValue)) {
      return name;
    }
  });

  $listOfNames.innerHTML = "";
  $message.textContent = "";

  if (filteredNames.length === 0) {
    $message.textContent = `No hay coincidencias`;
  }

  const orderedListNames = filteredNames;

  orderedListNames.forEach((name) => {
    $listOfNames.innerHTML += `<li>${name}</li>`;
  });
};

$input.addEventListener("input", handleInput);
$button.addEventListener("click", handleInput);
