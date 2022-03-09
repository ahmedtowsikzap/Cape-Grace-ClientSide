import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ManageAllProducts = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://guarded-lowlands-64841.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteHotel = (id) => {
    fetch(`https://guarded-lowlands-64841.herokuapp.com/hotels/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted successfully");
          const remainingHotels = orders.filter((order) => order._id !== id);
          setOrders(remainingHotels);
        }
      });
  };
  return (
    <div className="myOrders">
      <Container>
        <Row xs={1} lg={2} xl={3} className="g-4">
          {orders?.map((order) => (
            <Col key={order._id}>
              <Card className="d-flex flex-row p-3 myOrder-card  ">
                <Card.Img
                  src={order.main_image}
                  className="my-order-image"
                ></Card.Img>
                <Card.Body className="ps-2 pe-0 pt-0">
                  <Card.Title>{order.hotel_name.slice(0, 10)}...</Card.Title>
                  <small className="d-block">{order.status}</small>
                  <Button
                    variant="danger"
                    className=" mt-3"
                    onClick={() => handleDeleteHotel(order._id)}
                  >
                    Delete Product
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageAllProducts;