import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useAuth from "../../hooks/useAuth";
import Headers from "../Shared/Navbar/Headers";
import "./MyOrder.css";
const MyOrder = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState();
  console.log(myOrders);
  useEffect(() => {
    fetch(`https://guarded-lowlands-64841.herokuapp.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((orders) => {
        setMyOrders(orders);
      });
  }, [user?.email]);
  const handleDeleteOrder = (id) => {
    fetch(`https://guarded-lowlands-64841.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted successfully");
          const remainingOrders = myOrders.filter(
            (myOrder) => myOrder._id !== id
          );
          setMyOrders(remainingOrders);
        }
      });
  };
  return (
    <>
      <Headers />
      <div className="myOrders">
        <Container>
          <Row xs={1} lg={2} xl={3} className="g-4">
            {myOrders?.map((myOrder) => (
              <Col key={myOrder._id}>
                <Card className="d-flex flex-row p-3 myOrder-card  ">
                  <Card.Img
                    src={myOrder.main_image}
                    className="my-order-image"
                  ></Card.Img>
                  <Card.Body className="ps-2 pe-0 pt-0">
                    <Card.Title>{myOrder.hotel_name.slice(0, 10)}</Card.Title>
                    <small className="d-block text-warning">
                      {myOrder.status}
                    </small>
                    <Button
                      variant="danger"
                      className=" mt-3"
                      onClick={() => handleDeleteOrder(myOrder._id)}
                    >
                      Cancel
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyOrder;
