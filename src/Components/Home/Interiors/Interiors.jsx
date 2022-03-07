import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Interiors.css";

const Interiors = () => {
  return (
    <Container className="mt-5 pt-4 pb-2">
      <Row xs={1} md={2} lg={3} className="g-4">
        <Col>
          <Card className="head2-styling">
            <Card.Body>
              <h1 className="head-styling">Interiors</h1>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Card.Body>
              <Card.Title>General Rooms</Card.Title>
              <Card.Text>
                All our guestrooms are elegantly furnished with handmade
                furniture include luxury en-suite facilities with complimentary
                amenities pack.stay double
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/King-Size-Four-Poster.jpg"
            />
            <Card.Body>
              <Card.Title>King Size Four Poster</Card.Title>
              <Card.Text>
                This king size four poster provides views over landscaped
                gardens. It has a seating area, ample storage, digital safe and
                mini fridge.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="head4-styling">
            <Card.Img
              variant="top"
              src="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/King-Size-Sleigh-Bed.jpg"
            />
            <Card.Body>
              <Card.Title className="text-white">King Size Sleigh Bed</Card.Title>
              <Card.Text className="text-white">
                The king size sleigh bedded also provides views over landscaped
                gardens. It has ample storage, a seating area, digital safe and
                mini fridge.2 people can live easily
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/Deluxe-King-Size.jpg"
            />
            <Card.Body>
              <Card.Title>Deluxe King Size</Card.Title>
              <Card.Text>
                Our Deluxe king size room has a seating area, ample storage,
                digital safe and mini fridge. This room can also be configured
                with an extra roll-away bed for families of 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="head3-styling">
            <Card.Img
              variant="top"
              src="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/Deluxe-Twin_Superking.jpg"
            />
            <Card.Body>
              <Card.Title className="text-white">Deluxe Twin/Large Double</Card.Title>
              <Card.Text className="text-white">
                Our Deluxe Twin/Large Double also provides views over landscaped
                gardens. It has a seating area, digital safe and mini fridge.
                This room can be configured with either 2 single beds or zip
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Interiors;