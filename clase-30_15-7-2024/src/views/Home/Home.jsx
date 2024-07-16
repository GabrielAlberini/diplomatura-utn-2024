import Seo from "../../components/Seo/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Nuevo titulo"
        description="Nueva descripción"
        kw="palabra1, palabra2"
      />
      <h1>Hola desde Home</h1>
      <img src="./perro.jpeg" alt="imagen de perro nuevo" />
    </>
  );
};

export default Home;
