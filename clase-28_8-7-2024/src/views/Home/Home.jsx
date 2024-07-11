import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import { useContador } from "../../context/ContadorContext.jsx";

const Home = () => {
  const { userData, updateUser } = useUser();
  const { contador, sumar, restar } = useContador();

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(name, email);
    setName("");
    setEmail("");
  };

  return (
    <div>
      {userData.name ? (
        <div>
          <h1>Hola {userData.name}</h1>
          <h2>{userData.email}</h2>
        </div>
      ) : (
        "No hay usuario"
      )}

      <h4>Tienes {contador} productos</h4>

      <button onClick={() => sumar()}>Sumar</button>
      <button onClick={() => restar()}>Restar</button>

      <h2>Compraste {userData.purchase} productos</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Home;
