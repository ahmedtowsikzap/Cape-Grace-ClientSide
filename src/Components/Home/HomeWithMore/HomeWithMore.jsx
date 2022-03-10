import React from "react";
import device from "../../../images/hotel.png";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeWithMore = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.4 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
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
        className="slice-lg mt-5"
        style={{ fontFamily: "var(--montserrat-font)" }}
      >
        <div className="container">
          <div className="row align-items-center cols-xs-space cols-sm-space cols-md-space">
            <motion.div
              whileHover={{
                x: 25,
                scale: 0.9,
              }}
              className="col-lg-6 order-lg-2 ml-lg-auto"
            >
              <div className="block block-image">
                <img
                  src={device}
                  alt="device"
                  className="img-fluid img-center"
                />
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                x: -10,
              }}
              className="col-lg-5 order-lg-1"
            >
              <div className="row-wrapper">
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="icon-text">
                        <motion.h3
                          whileHover={{
                            x: 17,
                          }}
                          className="heading h4"
                        >
                          Resturant
                        </motion.h3>
                        <p>
                          We welcome you to taste Holland! Enjoy a new authentic
                          Hollands Trattoria menu, created by our Partner Chef
                          Oliver Glowig from Rome and our culinary team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <motion.h3
                          whileHover={{
                            x: 30,
                          }}
                          className="heading h4"
                        >
                          Spa - beauty & Health
                        </motion.h3>
                        <p>
                          Cheers to your new spa! Whether you want more
                          relaxation, less stress, or a place to entertain, were
                          sure youre going to love it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <motion.h3
                          whileHover={{
                            x: -20,
                          }}
                          className="heading h4"
                        >
                          Conference Room
                        </motion.h3>
                        <p>
                          Like a boardroom, most conferencing spaces are
                          designed with a long table and plenty of chairs.
                          Usually, a conference room will also have a projector
                          or large TV on one side, with the chairs arranged so
                          that no one has their back to the screen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default HomeWithMore;
