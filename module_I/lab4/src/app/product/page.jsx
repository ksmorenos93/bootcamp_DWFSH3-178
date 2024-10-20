"use client";

import {Col, Container, Row, ListGroup} from "react-bootstrap";
import Header from "lab4/components/shared/header/page";
import {useEffect, useState} from "react";

export default function ProductPage() {
  
  let [product, setProduct] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <Container>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {product.map(product => (
              <ListGroup.Item key={product.id}>{product.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}