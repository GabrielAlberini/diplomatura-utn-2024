import Layout from "../../components/Layout/Layout";
import "./Home.css";
const Home = () => {
  return (
    <Layout>
      <section className="banner">
        <h2>
          Data <span>tailored </span>
          to
          <br /> your need
        </h2>
        <a href="#" className="btn hover-effect">
          Learn More
        </a>
        <div className="cont-img-home">
          <img src="./celu.png" alt="imagen de celu" />
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <div className="number-box">1</div>
          <div>
            <h3>Actionable insights</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quidem, quos magnam reprehenderit quisquam officia.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="number-box">2</div>
          <div>
            <h3>Data-driven decisions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quidem, quos magnam reprehenderit quisquam officia.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="number-box">3</div>
          <div>
            <h3>Always affordable</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque quidem, quos magnam reprehenderit quisquam officia.
            </p>
          </div>
        </div>
      </section>
      <section className="profile">
        <div className="cont-position-profile">
          <div className="cont-img-profile">
            <img src="./perfil.jpeg" alt="foto de perfil" />
          </div>
          <div className="cont-data-profile">
            <h3>Be the first to test</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              impedit facilis quia consequuntur tempore qui dignissimos deserunt
              itaque praesentium voluptates!
            </p>
            <a href="#" className="btn hover-effect">
              Apply the access
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
