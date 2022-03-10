import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomewithAbout = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };
  const scrollReveal2 = {
    hidden: { opacity: 0, transition: { duration: 0.4 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.9,
      },
    },
  };
  return (
    <>
      <section
        className="slice slice-lg mt-5 pt-5"
        data-delimiter="1"
        style={{ fontFamily: "var(--montserrat-font)" }}
      >
        <div className="container">
          <div className="row cols-xs-space cols-sm-space align-items-center">
            <motion.div
              variants={scrollReveal2}
              animate={controls}
              initial="hidden"
              ref={element}
              className="col-md-6"
            >
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="logo"
                className="img-center img-fluid rounded z-depth-3"
              />
            </motion.div>
            <motion.div
              variants={scrollReveal}
              animate={controls}
              initial="hidden"
              ref={element}
              className="col-md-6 col-lg-5 ml-lg-auto"
            >
              <div className="pr-md-4">
                <h3 className="heading h3">
                  Tours with Low Single Supplements
                </h3>
                <p className="lead text-gray mt-4">
                  Travelers enjoy the intimacy of our small groups of never more
                  than 16 guests. Our Journeys Without a Crowd offer a lighter
                  footprint with a more authentic, caring and sustainable
                  experience enhanced by our native-born guides.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomewithAbout;
