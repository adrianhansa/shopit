import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    };
    getProducts();
  }, []);
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
