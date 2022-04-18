import React from "react";
import { Card } from "react-bootstrap";

const ViewCart = () => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <Card.Title>Item Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Item Price</Card.Subtitle>
        <Card.Text>Item Description</Card.Text>
        <Card.Text>Item review</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ViewCart;
