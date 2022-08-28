import { motion } from "framer-motion";
import { useRef, UseEffect, useState } from "react"
import images from "./images";



function Project({ project }) {
  console.log(images)
    return (
      <div ref={project} className="project" id="project">
        <motion.h1 animate={{ x: 250 }}>Hello</motion.h1>
        <motion.div className="carousel">
          <motion.div className="inner-carousel">

          </motion.div>
        </motion.div>
           
      </div>
    );
  }
  
  export default Project;
  