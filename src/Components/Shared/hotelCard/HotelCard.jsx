import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import "./HotelCard.css";
const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { hotel_name, heading, description, main_image, _id } = hotel;
  return (
    <Col className="single-hotel-card">
      <Card>
        <Card.Img variant="top" src={main_image} className="hotel-card-img" />
        <Card.Body className="text-start">
          <Card.Title className="hotel-name">{hotel_name}</Card.Title>
          <Card.Text>{heading}</Card.Text>
          <button
            className="btn btn-outline-warning ms-0 py-2"
            onClick={() => {
              navigate(`/hotel/${_id}`);
            }}
          >
            Reserve
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HotelCard;