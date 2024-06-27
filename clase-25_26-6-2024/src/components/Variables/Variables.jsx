const Variables = () => {
  let contador = 0;

  const incrementar = () => {
    contador += 1;
    console.log(contador);
  };

  return (
    <div>
      <p>Haz hecho click {contador} veces</p>
      <button onClick={incrementar}>Haz click aquí</button>
    </div>
  );
};

export default Variables;
