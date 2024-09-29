import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ pizza, handleAddToCart }) => {
  return (
    <Card className="pizza-card">
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>Precio: ${pizza.price}</Card.Text>
        <Button variant="primary" onClick={() => handleAddToCart(pizza)}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
