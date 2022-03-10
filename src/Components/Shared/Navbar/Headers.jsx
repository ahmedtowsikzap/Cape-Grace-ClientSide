import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Headers.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo-main.png";
import Topbar from "../Topbar/Topbar";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";

const Headers = () => {
  const { user } = useAuth();
  return (
    <>
      <Topbar />
      <Navbar bg="light" expand="lg">
        <Container className="headers-container">
          <div>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "black" }}
            >
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="d-flex align-items-center"
              >
                <img src={logo} alt="" height="36px" />
                <p className="nav-logo-text my-0">
                  <span className="another">C</span>ape{" "}
                  <span className="nav-logo-text-span">Grace</span>
                </p>
              </motion.div>
            </NavLink>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1.6 }}
          >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/" className="navbar-link-custom">
                  Home
                </Link>
                <Link to="/contactus" className="navbar-link-custom">
                  Contact
                </Link>
                <Link to="/about" className="navbar-link-custom">
                  About
                </Link>
                <Link to="/login" className="navbar-link-custom">
                  Login
                </Link>
                {user?.email && (
                  <>
                    <Link to="/myorders" className="navbar-link-custom">
                      My Reserved
                    </Link>
                    <Link to="/dashboard" className="navbar-link-custom">
                      Dashboard
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </motion.div>
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
