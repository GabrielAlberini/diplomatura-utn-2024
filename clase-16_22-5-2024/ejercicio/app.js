// const $form = document.getElementById("form");
// const $input = document.getElementById("fruit");
// const $list = document.getElementById("list");

// const fruits = ["manzana", "banana", "pera", "naranja", "ciruela"];

// fruits.forEach((fruit) => {
//   $list.innerHTML += `<li>${fruit}</li>`;
// });

// $input.addEventListener("input", () => {
//   const fruitValue = $input.value.toLowerCase();

//   //const filteredFuits = ["manzana"]
//   const filteredFuits = fruits.filter((fruit) => {
//     if (fruit.includes(fruitValue)) {
//       return fruit;
//     }
//   });

//   $list.innerHTML = "";
//   filteredFuits.forEach((fruit) => {
//     $list.innerHTML += `<li>${fruit}</li>`;
//   });
// });

// // Callback -> función que se ejecuta cuando pasa algo
// $form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

// Ejercicio:

// Mapear y que cada fruta tenga un precio por kg
// Agregar en el mismo input que se pueda filtrar la fruta por precio

const $form = document.getElementById("form");
const $input = document.getElementById("fruit");
const $list = document.getElementById("list");

const fruits = ["manzana", "banana", "pera", "naranja", "ciruela"];

const objFruits = fruits.map((fruit) => {
  const newFruit = {
    name: fruit,
    price: Math.round(Math.random() * 100),
  };
  return newFruit;
});

objFruits.forEach((objFruit) => {
  $list.innerHTML += `<li>${objFruit.name} | $${objFruit.price} x kg</li>`;
});

$input.addEventListener("input", () => {
  const fruitValue = $input.value.toLowerCase();

  const filteredFruits = objFruits.filter((fruit) => {
    if (
      fruit.name.includes(fruitValue) ||
      String(fruit.price).includes(fruitValue)
    ) {
      return fruit;
    }
  });

  $list.innerHTML = "";
  filteredFruits.forEach((fruit) => {
    $list.innerHTML += `<li>${fruit.name} | $${fruit.price} x kg</li>`;
  });
});

// // Callback -> función que se ejecuta cuando pasa algo
$form.addEventListener("submit", (event) => {
  event.preventDefault();
});
