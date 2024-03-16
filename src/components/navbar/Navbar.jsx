import React from "react";
import "./Navbar.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mubarak Ali
        </motion.span>
        <motion.div className="social"
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         >
          <a href="https://www.facebook.com/profile.php?id=100064798702685" className="social-icons" style={{ color: "#3b5998" }}>
            <FaSquareFacebook />
          </a>
          <a href="https://www.instagram.com/the_elder.one?igsh=ZGUzMzM3NWJiOQ==" className="social-icons" style={{ color: "#E1306C" }}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mubarak-ali-rd?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icons" style={{ color: "#004182" }}>
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
