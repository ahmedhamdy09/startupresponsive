import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import "./Navss.css";

function Navss() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">DORSIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#headersss" className="first">
                Home
              </Nav.Link>
              <Nav.Link href="#servicesOnes">Services</Nav.Link>
              <Nav.Link href="#bannerZeo">Features</Nav.Link>
              <Nav.Link href="#pricinng">Pricing</Nav.Link>
              <Nav.Link href="#responsibity">Team</Nav.Link>
              <Nav.Link href="#blogsss">Blog</Nav.Link>
              <Nav.Link href="#contLinkss">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navss;
