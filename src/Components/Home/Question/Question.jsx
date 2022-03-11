import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./Question.css";

const QuestiononHome = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <motion.section
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
        className="slice background-color"
      >
        <div className="mt-5">
          <div className="container">
            <div className="row align-items-center cols-xs-space cols-sm-space cols-md-space text-center text-lg-left">
              <div className="col-lg-7">
                <h1 className="heading h2 text-white strong-500">
                  Want to Connect?
                </h1>
                <p className="lead text-white">
                  Take your time & just call right away to or email us for any
                  queries
                </p>
              </div>
              <div className="col-lg-3 ml-lg-auto">
                <div className="text-center text-md-right">
                  <Link to="/contactus">
                    <Button className="btn btn-danger btn-rounded my-3 px-5">
                      Contact us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default QuestiononHome;
