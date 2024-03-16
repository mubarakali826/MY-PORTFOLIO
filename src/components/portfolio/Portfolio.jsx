import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "FlameChat",
    img: "/chat.png",
    desc: "A blazing fast and secure chatting app powered by Firebase, offering seamless communication and real-time messaging experiences.",
    link:"https://65d861a25f14bec4b369f60a--classy-kelpie-9d0bbb.netlify.app/",
  },
  {
    id: 2,
    title: "Disney Clone",
    img: "/disney.png",
    desc: "MagicWorld: A captivating Disney-inspired clone crafted with Tailwind and React, bringing the enchantment of beloved characters and immersive storytelling to life with seamless user experience.",
    link:"https://amazing-swan-77c656.netlify.app/",
  },
  {
    id: 3,
    title: "TaskMaster:",
    img: "/todo.png",
    desc: "Your efficient todo app powered by Firebase and React. Stay organized and on track with seamless task management, anytime, anywhere.",
    link:"https://65d1ab278057b9086b8de546--incomparable-brioche-f00e7b.netlify.app/",
  },
  {
    id: 4,
    title: "WebDev",
    img: "/webdev.png",
    desc: "Your virtual hub for navigating the world of web development. Find skilled developers, designers, and valuable resources to fuel your projects. ",
    link:"https://mubarakali826.github.io/webdev.github.io/",
  },
];
const Single = ({ item }) => {
  const ref=useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });
  const y=useTransform(scrollYProgress,[0,1],[-300,300]);
  
  return (
  <section >
    <div className="container" >
      <div className="wrapper">
     <div className="imageContainer" ref={ref}>
      <img src={item.img} alt="" />
     </div>
      <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button><a href={item.link}>See Demo</a></button>
      </motion.div>
      </div>
    </div>
  </section>
  );
};
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
