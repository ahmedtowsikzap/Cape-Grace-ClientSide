import React from "react";
import "./Topbar.css"
import { FcCallback } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const TopBar = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  
  return (
    <Container className="topbar-container my-2 mb-1">
      <div className="container-fluid top-bar-border">
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
                <button
                  onClick={logOut}
                  className="btn-regular navbar-book-btn"
                >
                  SignOut
                </button>
              </NavLink>
            ) : (
              <NavLink className="d-none d-lg-block" to="/login">
                <button className="btn btn-outline-danger btn-rounded">SignIn</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopBar;