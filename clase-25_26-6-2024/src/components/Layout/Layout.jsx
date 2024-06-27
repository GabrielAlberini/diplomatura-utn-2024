/* eslint-disable react/prop-types */
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
