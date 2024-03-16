import React, { useState } from 'react'
import  { motion } from 'framer-motion'
import "./sidebar.scss";
import ToggleButton from './ToggleButton/ToggleButton';
import Links from './Links/Links';

function Sidebar() {
  const [open,setOpen]=useState(false);
  const variants={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }

    },
    closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:150,
        damping:30,
      }
    }
  }
  return (
    <motion.div className='sidebar' animate={open?"open":"closed"}>
      <motion.div  className="bg" variants={variants}>
        <Links/>
        <ToggleButton/>
      </motion.div >
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
