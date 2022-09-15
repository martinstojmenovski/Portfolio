
import { useRef, UseEffect, useState, useEffect } from "react"
// import images from "./images";
import "./project.css"
import image1 from './images/friends.png'
import image2 from './images/marvel.png'
import image3 from './images/portfolio.png'
import image4 from './images/ventilation.png'



function Project({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dotColor, setDotColor] = useState('white')

  const project1 = (<div className="container1">
    <div className="project1">
      <h3>Friends</h3>
      <p style={{ lineHeight: '28px' }}>User authentication application built into React and Django
        allows you to create an account and login with user verification.</p>
      <p style={{ textDecoration: 'underline' }}>MORE</p>
    </div>
  </div>)
  const project2 = (<div className="container2">
    <div className="project2">
      <h3>Ventilation</h3>
      <p style={{ lineHeight: '28px', fontStyle: 'italic' }}>The intent of this website is to be a social
        media page that allows users to post their grievances. It is team project built in React and Express.js.</p>
      <p style={{ textDecoration: 'underline' }}>MORE</p>
    </div>
  </div>)

  const project3 = (<div className="container3">
    <div className="project3">
      <h3>Marvel</h3>
      <p style={{ lineHeight: '28px', fontStyle: 'italic' }} >Interactive application allows you to read the description
        of the given character by selecting it. Built into React using third-party APIs.</p>
      <p style={{ textDecoration: 'underline' }}>MORE</p>
    </div>
  </div>)

  const project4 = (<div className="container4">
    <div className="project4">
      <h3>Portfolio</h3>
      <p style={{ lineHeight: '28px', fontStyle: 'italic' }}>The portfolio website is my first project created
        to represent myself online. Technologies used for this website: HTML, CSS and jQuery.</p>
      <p style={{ textDecoration: 'underline' }}>MORE</p>
    </div>
  </div>)

  const images = [project1, project2, project3, project4]
  // image1, image2, image3, image4, 


  const sliderStyles = {
    height: "100%",
    position: "relative"
  }

  // const slideStyles = {
  //   width: "100%",
  //   height: "100%",
  //   borderRadious: "10px",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundImage: `url(${images[currentIndex]})`
  // }
  // console.log(images[0])

  const containerStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    zIndex: '2',



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
    padding: "20px",
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
    padding: "20px",
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    bottom:'-13vh',

    

  }

  let dotStyles = {
    margin: '10px 5px',
    cursor: 'pointer',
    height: '17px',
    width: '17px',
    backgroundColor: 'white',
    borderRadius: '100%',
    zIndex:"3",
  }
  // console.log(dotColor)
  const dots = images.map((image, slideIndex) => {
   
    return (
      <div
        key={slideIndex}
        style={dotStyles}
        onClick={() => goToSlide(slideIndex)} >
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

  const changeDotColor = (index) =>{
    dots[currentIndex].props.style.backgroundColor = 'black'
    
  }


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
    changeDotColor(slideIndex)
  }
 

  return (
    <div ref={project} className='project-page'>



      <div >
        <div className="screen-768" style={containerStyles} >
          <div style={sliderStyles} >
            <div style={leftArrowStyles} onClick={goToPrevious} > L </div>
            <div style={rightArrowStyles} onClick={goToNext} > R </div>

            {images[currentIndex]}


            <div style={dotsContainerStyles}>
              {dots}
            </div>
          </div>
        </div>
      </div>


      <div className='image-slider'>
        {project1}
        {project2}
        {project3}
        {project4}
      </div>



      <div className="descriptions">
        <div><h1>Previous work</h1></div>
        <div> <p className="describing-work">All the projects above are mainly created for educational purpose,
          and are built from scratch exclusively by me or team projects where
          I have participated. The idea is to show my previous experience as well as
          my capabilities.</p></div>
      </div>



    </div>
  );
}

export default Project;
