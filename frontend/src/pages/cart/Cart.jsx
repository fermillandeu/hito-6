import React, { useContext } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import CartContext from "../../context/CartContext"; 
import "./Cart.css";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext); 

  // Función para calcular el total
  const calculateTotal = () => {
    return cart.reduce((acc, pizza) => {
      const price = parseFloat(pizza.price) || 0; // Convierte a número, si no puede, usa 0
      const count = pizza.count || 0; // Si no hay cantidad, usa 0
      return acc + price * count; // Suma al acumulador
    }, 0);
  };

  const total = calculateTotal(); // Llama a la función para obtener el total

  return (
    <div className="Cartcontainer">
      <h1 className="text-center my-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <h4 className="text-center">Tu carrito está vacío</h4>
      ) : (
        <>
          <div className="d-flex flex-column align-items-center mt-4 mb-4">
            <h3>Total: ${total}</h3>
            <Button variant="success" className="mt-3">Pagar</Button>
          </div>
          <Row className="mb-4">
            {cart.map((pizza) => (
              <Col key={pizza.id} xs={12} md={4} className="mb-4">
                <Card className="pizza-card">
                  <Card.Img variant="top" src={pizza.img} />
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>Precio: ${pizza.price}</Card.Text>
                    <Card.Text>Cantidad: {pizza.count}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="secondary" onClick={() => decreaseQuantity(pizza.id)}>-</Button>
                      <Button variant="primary" onClick={() => increaseQuantity(pizza.id)}>+</Button>
                      <Button variant="danger" onClick={() => removeFromCart(pizza.id)}>Eliminar</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default Cart;
