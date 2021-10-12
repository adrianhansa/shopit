import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <Container>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={4} lg={3} key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeScreen;
