import React from "react";
import { Row, Col } from "react-bootstrap";
import Noticia from "./Noticia";

const Noticias = ({ noticias }) => {
  const noticiasLimitadas = noticias.slice(0, 6);

  const crearNoticias = () => {
    return noticiasLimitadas.map((noticia, index) => (
      <Col key={index} sm={12} md={6} lg={4}>
        <Noticia noticia={noticia} />
      </Col>
    ));
  };

  return <Row>{crearNoticias()}</Row>;
};

export default Noticias;
