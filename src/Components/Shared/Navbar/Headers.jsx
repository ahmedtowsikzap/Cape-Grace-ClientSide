import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Headers.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo-main.png";
import Topbar from "../Topbar/Topbar";

const Headers = () => {
  return (
    <>
      <Topbar />
      <Navbar bg="light" expand="lg">
        <Container className="headers-container">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex align-items-center">
              <img src={logo} alt="" height="36px" />
              <p className="nav-logo-text my-0">
                <span className="another">C</span>ape <span className="nav-logo-text-span">Grace</span>
              </p>
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="navbar-link-custom">
                Home
              </Link>
              <Link to="/myorders" className="navbar-link-custom">
                My Reserved
              </Link>
              <Link to="/dashboard" className="navbar-link-custom">
                Dashboard
              </Link>
              <Link to="/contactus" className="navbar-link-custom">
                Contact
              </Link>
              <Link to="/about" className="navbar-link-custom">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;