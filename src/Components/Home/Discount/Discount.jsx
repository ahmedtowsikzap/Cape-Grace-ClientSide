import { motion } from "framer-motion";
import React from "react";
import "./Discount.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Discount = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1, transition: { duration: 0.6 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        scale: 1.1,
        delay: 1.1,
      },
    },
  };
  return (
    <>
      <div className="pt-3">
        <div className="bigimage">
          <motion.div
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
            className="overlay"
          >
            <h1>Get 10% Off On Your Next Travel</h1>
            <p className="texx text-center">
              Travel between 22nd August to 23 November & get exciting offers
              along with a sure 10% cash discount
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Discount;
