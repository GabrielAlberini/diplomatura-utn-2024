import { useState } from "react";

// Input controlado

const Formulario = () => {
  const [nombre, setNombre] = useState("hola");

  const handleChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleChange} value={nombre} />
        <p>Valor del input: {nombre}</p>
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Formulario;
