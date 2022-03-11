import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Headers from "../Shared/Navbar/Headers";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const { logOut, admin, user } = useAuth();
  return (
    <>
      <Headers />
      <Offcanvas
        style={{ maxWidth: "300px" }}
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Dashboard</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Link
              to={`/dashboard/manageallorders`}
              className="text-decoration-none"
            >
              <button className="btn-regular d-block my-2">
                Manage All Orders
              </button>
            </Link>
            <Link
              to={`/dashboard/manageallproducts`}
              className="text-decoration-none"
            >
              <button className="btn-regular d-block my-2">
                Manage Product
              </button>
            </Link>
            <Link to={`/dashboard/makeadmin`} className="text-decoration-none">
              <button className="btn-regular d-block my-2">
                Make An Admin
              </button>
            </Link>
            <Link to={`/dashboard/reviews`} className="text-decoration-none">
              <button className="btn-regular d-block my-2">
                send a Revew!
              </button>
            </Link>
          </div>
          <Link to="/" className="text-decoration-none">
            <button className="btn-regular bg-success d-block my-2">
              Go back home
            </button>
          </Link>
          <button onClick={logOut} className="btn-regular bg-danger my-2">
            Logout
          </button>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="container">
        <h1 className="text-muted mt-4">Dashboard</h1>
        <Button
          variant="primary"
          onClick={toggleShow}
          className="me-2 fs-5 btn-regular"
        >
          Manage
        </Button>
        <i className="fas fs-5 fa-cog text-muted"></i>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
