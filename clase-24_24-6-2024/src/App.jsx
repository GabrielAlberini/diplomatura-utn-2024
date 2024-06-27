import Titulo from "./components/Titulo/Titulo.jsx";

const App = () => {
  return (
    <div>
      <h1>Hola desde App</h1>
      <Titulo texto="primer título" />
      <Titulo texto="segundo título" />
    </div>
  );
};

export default App;
