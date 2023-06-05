import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Maquetado.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Maquetado = ({ consultarAPI }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const pais = event.target.elements.pais.value;
    const categoria = event.target.elements.categoria.value;
    consultarAPI(pais, categoria);
  };

  return (
    <>
      <Container className="orden">
        <Row>
          <Col>
            <h1 className="text-center mb-5">Selecciona país y categoría:</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="pais" className="input">
                <Form.Control as="select">
                  <option value="ar">Argentina</option>
                  <option value="us">Estados Unidos</option>
                  <option value="gb">Reino Unido</option>
                  <option value="ca">Canadá</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="categoria">
                <Form.Control as="select">
                  <option value="general">General</option>
                  <option value="sports">Deportes</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="technology">Tecnología</option>
                </Form.Control>
              </Form.Group>
              <Button className="btn btn-dark" type="submit" id="boton">
                Buscar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Maquetado;
