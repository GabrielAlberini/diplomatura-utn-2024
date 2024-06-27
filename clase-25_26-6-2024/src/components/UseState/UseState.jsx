import { useState } from "react";

const UseState = () => {
  const [contador, setContador] = useState(0);
  // useState("aca va el valor inicial de contador")
  // contador -> es el estado (que se puede como quieras)
  // setContador -> es una función que actualiza (o modifica) el estado, tambien se llama como quieras

  let stockProducto = 5;

  const sumar = () => {
    if (stockProducto !== contador) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador !== 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <p>Haz hecho click {contador} veces</p>
      <button onClick={sumar}>SUMAR</button>
      <button onClick={restar}>RESTAR</button>
    </div>
  );
};

export default UseState;

// hook -> anzuelo
// useState
// useEffect
// useRef
// useContext
