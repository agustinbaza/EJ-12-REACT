import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Noticias = ({ noticias }) => {
  const noticiasLimitadas = noticias.slice(0, 6);

  return (
    <Container>
      <Row>
        {noticiasLimitadas.map((noticia, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="">
              <Card.Img variant="top" src={noticia.urlToImage} />
              <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>{noticia.description}</Card.Text>
                <Button
                  href={noticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más...
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Noticias;
