import { motion } from "framer-motion";
import { useRef, UseEffect, useState, useEffect } from "react"
import images from "./images";
import "./project.css"

function Project({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: "100%",
    position: "relative"
  }

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadious: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${images[currentIndex]})`
  }
  // console.log(images[0])

  const containerStyles = {
    width: '280px',
    height: '500px',
    margin: '0 auto',

  }

  const leftArrowStyles ={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  }
  const rightArrowStyles ={
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1 ;
    setCurrentIndex(newIndex)
  } 
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }



  return (
    <div ref={project} className="project" id="project" style={containerStyles}>

      <div style={sliderStyles} >
        <div style={leftArrowStyles} onClick={goToPrevious} > L </div>
        <div style={rightArrowStyles} onClick={goToNext} > R </div>

        <div style={slideStyles}></div>
      </div>
    </div>
  );
}

export default Project;
