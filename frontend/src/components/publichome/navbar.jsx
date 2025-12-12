import React from 'react'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../../../css/root.css'
import '../../../css/publicHome/navbar.css'
import logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="navBar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} id="logoId" alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-lg-end text-end w-100"
        >
          <Nav
            id="navText"
            className="ms-lg-auto d-flex flex-column flex-lg-row align-items-lg-center"
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <button className="loginBtn">LOGIN</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
