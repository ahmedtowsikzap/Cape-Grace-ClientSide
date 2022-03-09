import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./HotelDetail.css";
import Headers from "../Shared/Navbar/Headers";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
const HotelDetail = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [singleHotel, setSingleHotel] = useState({});
  useEffect(() => {
    fetch(`https://guarded-lowlands-64841.herokuapp.com/hotels/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleHotel(data));
  }, [id]);
  const { hotel_name, description,rating, perfect_for, perfect_reason, heading, main_image, price } = singleHotel;
  const onSubmit = () => {
    let newData = {
      hotel_name,
      main_image,
      price,
      status: "pending",
      email: user.email,
    };
    fetch("https://guarded-lowlands-64841.herokuapp.com/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placed successfully");
        }
      });
  };
  return (
    <>
      <Headers />
      <Container className="hotel-detail-container mt-5">
        <h2 className=" mb-5 ms-3">{hotel_name}</h2>
        <div className="d-flex justify-content-center">
          <img src={main_image} alt="" className="img-fluid" />
        </div>
        <Row className="mt-5" xs={1} md={2}>
          <Col className="col-md-7">
            <h3>{heading}</h3>
            <p>{description}</p>
          </Col>
          <Col>  
          </Col>
        </Row>
      </Container>
                <div class="card text-white bg-dark mb-3 w-50 m-auto">
                    <div class="card-header"><span className='text-warning px-1'>{perfect_for}</span></div>
                    <div class="card-body">
                        <h5 class="card-title"><span className='text-warning px-1'>{perfect_reason}</span></h5>
                        <p class="card-text">Ratings: <span className='text-success'>{rating}</span></p>
                        <p class="card-text"> Price: <span className='text-success' >${price}</span></p>
                        <button
              className="btn btn-outline-danger btn-rounded"
              onClick={() => {
                onSubmit();
              }}
            >
              Reserve Now
            </button>
                    </div>
                </div>
                <Footer/>
    </>
  );
};

export default HotelDetail;