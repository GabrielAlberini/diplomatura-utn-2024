/* eslint-disable react/prop-types */

{
  /* <Boton
clase="invertir-boton"
texto="Agregar al carrito"
color="var(--color-info)"
>
<i className="bx bx-cart"></i>
</Boton> */
}

import "./Boton.css";

const Boton = (props) => {
  return (
    <button className={props.clase} style={{ backgroundColor: props.color }}>
      {props.children}
      {props.texto}
    </button>
  );
};

export default Boton;
