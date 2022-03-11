import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CaptionCard.css";
import { useInView } from "react-intersection-observer";
const CaptionCard = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.8 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
  return (
    <>
      <h1 className="text-center cap mb-1 pt-5">Collaborations</h1>
      <Container className="mt-3">
        <motion.div
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <Row xs={1} md={2} lg={12} className="g-4">
            <Col className="pb-5">
              <Card className="bg-white text-danger">
                <Card.Img
                  src="https://www.moroccoworldnews.com/wp-content/uploads/2021/10/moroccan-passenger-gives-birth-aboard-turkish-airlines.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Text> We Partnered with Turkish Airline</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col>
              <Card className="bg-white text-warning">
                <Card.Img
                  src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2019/10/airbnb-678x381.png"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Text>
                    Also Find Us on Airbnb to get exclusive offers & deals
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </>
  );
};

export default CaptionCard;
