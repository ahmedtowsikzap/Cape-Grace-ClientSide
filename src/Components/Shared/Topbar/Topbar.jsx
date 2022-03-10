import React from "react";
import "./Topbar.css";
import { FcCallback } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";

const TopBar = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <Container className="topbar-container my-2 mb-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.6 }}
        className="container-fluid top-bar-border"
      >
        <div className="container d-none d-md-flex justify-content-between py-2 top-bar-text">
          <div>
            <p className="top-bar-text-left my-0"> Howdy!</p>
          </div>
          <div className="d-flex top-bar-text-right">
            <p className="my-0">
              <FcCallback /> 202-555-0102
            </p>
            <p className="ms-4 my-0">
              <HiOutlineMail /> contact@capegrace.com
            </p>
            <p className="px-3 text-warning">{user.displayName}</p>
            {user?.email ? (
              <NavLink className="d-none d-lg-block" to="/login">
                <motion.button
                  onClick={logOut}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-outline-danger btn-rounded"
                >
                  SignOut
                </motion.button>
              </NavLink>
            ) : (
              <NavLink className="d-none d-lg-block" to="/login">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-outline-danger btn-rounded"
                >
                  SignIn
                </motion.button>
              </NavLink>
            )}
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default TopBar;
