
import { useRef, UseEffect, useState, useEffect } from "react"
import images from "./images";
import "./project.css"
import friends from './images/friends.png'

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
    position: 'relative',
    width: '280px',
    height: '500px',
    margin: '0 auto',
    /// display when mobile size -------
    display:'none'

  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  }
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: "pointer",
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',

  }
  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  }
  const dots = images.map((image, slideIndex) => {
    return (
      <div
        key={slideIndex}
        style={dotStyles}
        onClick={() => goToSlide(slideIndex)} >O
      </div>
    )
  })

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }


  return (
    <div ref={project} className='project-page'>
      <div className='image-slider'>
        <div style={containerStyles} >
          <div className="projects" style={sliderStyles} >
            <div style={leftArrowStyles} onClick={goToPrevious} > L </div>
            <div style={rightArrowStyles} onClick={goToNext} > R </div>
            <div className="icon" style={ slideStyles }></div>
            <div style={dotsContainerStyles}>
              {dots}
            </div>
          </div>
        </div>


      <div className="container">
      <img src={friends}/>
        <div className="overlay">
        <div className="project1-content">
          <h3>Friends</h3>
          <p style={{lineHeight:'28px'}}>User authentication application built into React and Django
            allows you to create an account and login with user verification.</p>
          <p style={{ textDecoration: 'underline' }}>MORE</p>
         
        </div>
        </div>
        </div>


        <div className="project2">
          <h3>Ventilation</h3>
          <p style={{lineHeight:'28px'}}>The intent of this website is to be a social 
          media page that allows users to post their grievances. It is team project built in React and Express.js.</p>
          <p style={{ textDecoration: 'underline' }}>MORE</p>
        </div>
        <div className="project3">
          <h3>Marvel</h3>
          <p style={{lineHeight:'28px'}}>Interactive application allows you to read the description 
          of the given character by selecting it. Built into React using third-party APIs.</p>
          <p style={{ textDecoration: 'underline' }}>MORE</p>
        </div>
        <div className="project4">
          <h3>Portfolio</h3>
          <p style={{lineHeight:'28px'}}>The portfolio website is my first project created 
          to represent myself online. Technologies used for this website: HTML, CSS and jQuery.</p>
          <p style={{ textDecoration: 'underline' }}>MORE</p>
        </div>
      </div>
      <div className="descriptions">
        <h1>Previous work</h1>
        <p>All the projects above are mainly created for educational purpose,
          and are built from scratch exclusively by me or team projects where
          I have participated. The idea is to show my previous experience as well as
          my capabilities.

        </p>
      </div>
    </div>
  );
}

export default Project;
