import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container"> {/* Centered container */}
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"> {/* Align links to the right */}
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/cv">CV</Nav.Link>
            <Nav.Link href="/contact_me">Contact</Nav.Link>
            <Nav.Link href="/skill_set">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
