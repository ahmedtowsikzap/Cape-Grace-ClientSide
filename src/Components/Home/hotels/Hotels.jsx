import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HotelCard from "../../Shared/hotelCard/HotelCard";
import "./Hotels.css";
const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://guarded-lowlands-64841.herokuapp.com/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);
  return (
    <Container className="my-5">
      <div className="hotel-cards-headings">
        <h2 className="text-center">Remarkable Hotels</h2>
        <p className="text-center">Checkout now to get discounts!</p>
      </div>
      <Row xs={1} lg={3} sm={1} md={2} className="g-5">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </Row>
    </Container>
  );
};

export default Hotels;