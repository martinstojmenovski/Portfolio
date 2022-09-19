
import { useState } from "react"
import "./project.css"
import images from "./projectsText"

function Project({ project, projectsText }) {
  // useState declared to change index of an array slider.
  const [currentIndex, setCurrentIndex] = useState(0)
  

  // function to change previous index of the slider.
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  // function to change next index of the slider.
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  // map function to display dots for every index of the array.
  const dots = images.map((image, slideIndex) => {
    return (
      <div
        key={slideIndex}
        className={currentIndex === slideIndex ? 'dots' : 'dots active'}
        onClick={() => goToSlide(slideIndex)} >
      </div>
    )
  })

  // functuin to change the index of the array when click on the dot.
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }


  return (
    <div ref={project} className='project-page'>

      <div className="image-slider">
        <div className="left-arrow" onClick={goToPrevious} ><span></span><span></span></div>
        <div className="right-arrow" onClick={goToNext} ><span></span><span></span></div>
        {images[currentIndex]}
        <div className="dot-container">
          {dots}
        </div>
      </div>

      <div className='projects'>
        {images[0]}
        {images[1]}
        {images[2]}
        {images[3]}
      </div>

      <div className="descriptions">
        <div className="project-header">Previous work</div>
        <div className="description-article">All the projects above are mainly created for educational purpose,
          and are built from scratch exclusively by me or team projects where
          I have participated. The idea is to show my previous experience as well as
          my capabilities.</div>
      </div>

    </div>
  );
}

export default Project;