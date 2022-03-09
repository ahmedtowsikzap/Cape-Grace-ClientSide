import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allHotels, setAllHotels] = useState([]);
  useEffect(() => {
    fetch("https://guarded-lowlands-64841.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllHotels(data));
  }, []);
  const handleDeleteOrder = (id) => {
    fetch(`https://guarded-lowlands-64841.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted successfully");
          const remainingHotels = allHotels.filter((hotel) => hotel._id !== id);
          setAllHotels(remainingHotels);
        }
      });
  };
  return (
    <div className="myOrders">
      <Container>
        <Row xs={1} lg={2} xl={3} className="g-4">
          {allHotels?.map((hotel) => (
            <Col key={hotel._id}>
              <Card className="d-flex flex-row p-3 myOrder-card  ">
                <Card.Img
                  src={hotel.main_image}
                  className="my-order-image"
                ></Card.Img>
                <Card.Body className="ps-2 pe-0 pt-0">
                  <Card.Title>{hotel.hotel_name.slice(0, 10)}...</Card.Title>
                  <small className="d-block">{hotel.status}</small>
                  <Button
                    variant="danger"
                    className=" mt-3"
                    onClick={() => handleDeleteOrder(hotel._id)}
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

export default ManageAllOrders;