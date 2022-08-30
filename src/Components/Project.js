import { motion } from "framer-motion";
import { useRef, UseEffect, useState, useEffect } from "react"
import images from "./images";
import  "./project.css"

function Project({ project }) {
  const [ width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  
  return (
    <div ref={project} className="project" id="project">
      <motion.div ref={carousel} className="carousel"
      //  whileTap={{ coursor: "grabbing" }} not sure if it works
      >
        <motion.div 
        drag='x'
        dragConstraints={{ right: 0, left: -width }} 
         className="inner-carousel">
          {images.map((image) => {
            return (
            <motion.div className="item" key={image}>
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
