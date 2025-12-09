// import Div from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const NavBar = ()=>{

//     return <>
//           <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:'#314335',height:'12vh',width:'100%'}} >
//       <Div style={{width:'100'}}>
//         <Navbar.Brand href="#home"><img src="./public/black.png" style={{height:'100px',width:'100px'}}></img></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Div>
//     </Navbar>
  
//     </>
// }

// export default NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../publichome/navbar.css'
const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navBar" >
        <Container>
          <Navbar.Brand href="#home">
            <img src="./public/black.png" id="logoId"/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* RIGHT SIDE ITEMS */}
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
