import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import './Pizza.css'; // Importa el archivo CSS

const Pizza = () => {
  const [infor, setInfor] = useState(null);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setInfor(data); 
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  if (!infor) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={infor.img} />
          <Card.Body>
            <Card.Title>{infor.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>INGREDIENTES:</Card.Text>
              <ul>
                {infor.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Title>PRECIO: {infor.price}</Card.Title>
              <Button variant="primary">Ver más 👀 </Button>
              <Button variant="dark">Añadir 🛒 </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default Pizza;
