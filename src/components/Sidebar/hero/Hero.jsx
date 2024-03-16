import React from "react";
import "./hero.scss";
import { MdOutlineSwipeDownAlt } from "react-icons/md";
import {  motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:15,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  },
};
const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x: "-950%",
    transition: {
      repeat:Infinity,
      duration: 50,
      repeatType:"mirrror",
    },
  },
};

function hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MUBARAK ALI</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI Designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See The Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.div className="scroller" style={{display:"inline"}} variants={textVariants} animate="scrollButton">
          <MdOutlineSwipeDownAlt style={{ fontSize: 50 }}  />
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate="animate">
        Digital Artisan Database Manager Web Architect
      </motion.div>
      <div className="imageContainer">
        <img src="img.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
