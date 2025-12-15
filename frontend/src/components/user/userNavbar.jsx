import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../../css/root.css";
import "../../../css/user/navbar.css"

const UserNavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" id="navBar">
      <Container>

        <Navbar.Brand as={Link} to="/user">
          <img src="/src/assets/logo.png" id="logoId" alt="RentGo Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end w-100"
        >
          <Nav className="align-items-lg-center gap-lg-2">

            <Nav.Link as={Link} to="/user">Home</Nav.Link>
            <Nav.Link as={Link} to="cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/user/carbooking">Bookings</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>

            <Nav.Link as={Link} to="profile" className="profile-wrapper">
              <img
                src="/src/assets/profile.png" 
                alt="Profile"
                className="profile-avatar"
              />
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavBar;
