const products = [
  {
    name: "Camisa",
    enStock: true,
    price: 1,
  },
  {
    name: "Pantalones",
    enStock: true,
    price: 12,
  },
  {
    name: "Zapatos",
    enStock: true,
    price: 14,
  },
  {
    name: "Sombrero",
    enStock: true,
    price: 166,
  },
  {
    name: "Sombrilla",
    enStock: true,
    price: 0,
  },
  {
    name: "Zapatos",
    enStock: true,
    price: 15,
  },
];

// Método ->
// find -> retorna el primer elemento que coincida

const foundProduct = products.find((product) => {
  if (product.name === "Zapatos") {
    return product;
  }
});

const foundsProducts = products.filter((product) => {
  if (product.name === "Zapatos") {
    return product;
  }
});

const students = ["Nicolas", "Felipe", "Juan"];

const mappedStudents = students.map((student, indice) => {
  const dataStudent = {
    indice: indice + 1,
    name: student,
  };

  return dataStudent;
});

console.log(mappedStudents);

const mappedProducts = products.map((product) => {
  const newProduct = {
    name: product.name,
    enStock: product.enStock,
    price: product.price,
    description: "",
  };

  return newProduct;
});

console.log("original", products);
console.log("mappeado", mappedProducts);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// {
//   numero: 1,
//   resultado: 5
// }

const resultadosTablaCinco = numeros.map((numero) => {
  return `El numero ${numero} * 5 da como resultado ${numero * 5}`;
});

console.log(resultadosTablaCinco);

const names = ["pc", "silla", "escritorio"];

const $list = document.getElementById("list");

const dataProducts = names.map((product) => {
  const newProduct = {
    name: product,
    price: Math.round(Math.random() * 10),
    description: "Esto es una descripción",
  };

  $list.innerHTML += `<li>
    <strong>${newProduct.name}</strong>
    <p>${newProduct.price}</p>
    <p>${newProduct.description}</p>
  </li>
  `;
});
