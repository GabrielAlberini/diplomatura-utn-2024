/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const Seo = (props) => {
  const { title, description, kw } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={kw} />
    </Helmet>
  );
};

export default Seo;
