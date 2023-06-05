import React from "react";
import { Card, Button } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  return (
    <Card className="">
      <Card.Img variant="top" src={noticia.urlToImage} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
        <Button href={noticia.url} target="_blank" rel="noopener noreferrer">
          Leer más...
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Noticia;
