import { motion } from "framer-motion";
import { useRef, UseEffect, useState } from "react"
import images from "./images";
import  "./project.css"

function Project({ project }) {
  // console.log(images)
  return (
    <div ref={project} className="project" id="project">
      <motion.div className="carousel">
        <motion.div drag='x' className="inner-carousel">
          {images.map((image) => {
            return (
            <motion.div className="item">
              <img src={image} alt="" />
            </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
