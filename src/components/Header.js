import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  let { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {!userInfo ? (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Login
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Register
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <NavDropdown title={userInfo.fullName} id="username" bg="dark">
                  <NavDropdown.Item
                    onClick={() => dispatch(logout())}
                    to="/"
                    bg="primary"
                  >
                    <Nav.Link>Logout</Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/profile">
                    <Nav.Link>Profile</Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
