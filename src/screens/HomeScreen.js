import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Product from "../components/Product";
import { getProducts } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Latest Products</h1>
      {loading ? (
        <p>Loading....</p>
      ) : products ? (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={4} lg={3} key={product._id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      ) : (
        <p>{error}</p>
      )}
    </Container>
  );
};

export default HomeScreen;
