import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HotelCard.css";
const HotelCard = ({ hotel }) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.6 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const navigate = useNavigate();
  const { hotel_name, heading, description, main_image, _id } = hotel;
  return (
    <motion.div
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
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
    </motion.div>
  );
};

export default HotelCard;
