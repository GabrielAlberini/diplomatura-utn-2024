import { useContador } from "../../context/ContadorContext.jsx";

const Contacto = () => {
  const { contador, sumar, restar } = useContador();
  return (
    <div style={{ backgroundColor: "azure" }}>
      <h4>Tienes {contador} productos</h4>

      <button onClick={() => sumar()}>Sumar</button>
      <button onClick={() => restar()}>Restar</button>
    </div>
  );
};

export default Contacto;
