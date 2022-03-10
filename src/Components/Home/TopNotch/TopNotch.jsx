import { motion } from "framer-motion";
import React from "react";
import video from "../../../Video/transition.mp4";
import "./TopNotch.css";

const TopNotch = () => {
  return (
    <div>
      <video src={video} autoPlay loop muted></video>
      <div className="text">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.4 }}
          transition={{ delay: 2.4, duration: 1.2 }}
        >
          EXPLORE!
        </motion.h3>
      </div>
    </div>
  );
};

export default TopNotch;
