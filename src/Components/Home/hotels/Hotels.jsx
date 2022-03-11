import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import HotelCard from "../../Shared/hotelCard/HotelCard";
import "./Hotels.css";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.1 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  useEffect(() => {
    fetch("https://guarded-lowlands-64841.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <Container className="my-5">
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="hotel-cards-headings"
      >
        <h2 className="text-center mt-5 pt-5">Remarkable Hotels</h2>
        <p className="text-center">Checkout</p>
      </motion.div>
      <Row xs={1} lg={3} sm={1} md={2} className="g-5">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </Row>
    </Container>
  );
};

export default Hotels;
