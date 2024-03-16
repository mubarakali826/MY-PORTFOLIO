import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const servicesVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
function Services() {
  const ref = useRef();
  const isInView=useInView(ref,{margin:"-100px"});
  return (
    <motion.div
    ref={ref}
      className="services"
      variants={servicesVariants}
      initial="initial"
      // whileInView="animate"
      animate={ "animate"}
    >
      <motion.div className="textContainer" variants={servicesVariants}>
        <p>
          I Focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={servicesVariants}>
        <div className="title">
          <img src="/people.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange",cursor:"pointer"}}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange",cursor:"pointer"}}>For Your </motion.b>Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={servicesVariants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Revolutionize Your Online Presence</h2>
          <p>
          Elevate your brand with cutting-edge web solutions tailored to your needs
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Engage Your Audience Like Never Before</h2>
          <p>
          Harness the power of React to build interactive and dynamic web applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box mobBox"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Unlock the Potential of Real-time Data</h2>
          <p>
          Leverage Firebase to integrate powerful real-time databases into your applications.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box mobBox"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Stand Out with Bespoke Design</h2>
          <p>
          Craft visually stunning websites with Sass and Tailwind. From custom styles to rapid prototyping
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;
