import React from 'react';
import { Link } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../../css/root.css';         // Root CSS variables
import '../../../css/publicHome/navbar.css';  // Component-specific CSS

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navBar">
      <Container>
        {/* LEFT SIDE: LOGO */}
        <Navbar.Brand as={Link} to="/">
          <img src="./public/black.png" id="logoId" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* RIGHT SIDE: NAV ITEMS */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto align-items-center" id="navText">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button className="loginBtn">LOGIN</button>
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

