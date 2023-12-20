import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar'; // Renamed to avoid conflict
import '../styles.css';

import img from './icons/image1.png';

function CustomNavbar() { // Renamed the component
  return (
    <NavbarBootstrap expand="lg" className="bg-white">
      <Container>
        <NavbarBootstrap.Brand><Link to={'/'}> <img src={img} alt='logo'/> </Link>  </NavbarBootstrap.Brand>
        <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/web3mkr'}> web3mkr</Link> </Nav.Link>
            <Nav.Link><Link to={'/white paper'}> white paper</Link> </Nav.Link>
            <Nav.Link><Link to={'/Services'}> Services</Link> </Nav.Link>
            <Nav.Link><Link to={'/contact us'}> ContactUs</Link> </Nav.Link>
            <Nav.Link>ContactUs</Nav.Link>
          </Nav>
          <button className='btn btn-red'>Start for free</button>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default CustomNavbar;
