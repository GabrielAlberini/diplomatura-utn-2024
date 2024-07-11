/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const contadorContext = createContext();

export const useContador = () => useContext(contadorContext);

export const ContadorProvider = (props) => {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <contadorContext.Provider value={{ contador, sumar, restar }}>
      {props.children}
    </contadorContext.Provider>
  );
};
