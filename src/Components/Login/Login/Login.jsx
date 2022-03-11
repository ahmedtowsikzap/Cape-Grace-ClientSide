import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Headers from "../../Shared/Navbar/Headers";
import "./Login.css";
import Footer from "../../Shared/Footer/Footer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Login = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.7 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.1,
        delay: 0.7,
      },
    },
  };
  const [logInData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    loginUser(logInData.email, logInData.password, location, navigate);
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...logInData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  return (
    <>
      <Headers></Headers>
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <Container className="p-4 mt-4">
          <Row>
            <Col lg={3}></Col>
            <Col lg={6} sm={12} xs={12} className="register-container">
              <div
                className="login-form"
                style={{ fontFamily: "var(--poppins-font)" }}
              >
                <h2 className="login-text">Log in/ Sign in</h2>
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      onChange={handleOnChange}
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleOnChange}
                      placeholder="Password"
                    />
                  </Form.Group>
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                    <span className="link-text">New User? please Register</span>
                  </NavLink>{" "}
                  <br />
                  <button
                    className="btn btn-outline-warning btn-rounded my-3 px-5"
                    type="submit"
                  >
                    Log in/Sign in
                  </button>
                  <br />
                </Form>
                <div className="wrapper"></div>
                <div></div>
                {isLoading && <Spinner animation="border" variant="info" />}
                {user?.email && (
                  <Alert style={{ marginTop: "10px" }} variant="success">
                    successfuly signIn!
                  </Alert>
                )}
                {authError && (
                  <Alert variant="danger">Ay yoooo what ya tryna do?!</Alert>
                )}
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Container>
      </motion.div>
      <Footer></Footer>
    </>
  );
};

export default Login;
