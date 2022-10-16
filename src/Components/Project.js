
import { useState } from "react"
import "./project.css"
import images from "./projectsText"

function Project({ project, projectsText }) {
  // useState declared to change index of an array slider.
  const [currentIndex, setCurrentIndex] = useState(0)
  
console.log(images)
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
    <section ref={project} id='PROJECT' className='PROJECT'>
        <h1>EXPLORE PREVIOUS WORK</h1>
        
        <div className='projects'>
        {images.map((image => image))}
      </div>

      <div className="image-slider">
        <div className="left-arrow" onClick={goToPrevious} ><span></span><span></span></div>
        <div className="right-arrow" onClick={goToNext} ><span></span><span></span></div>
        {images[currentIndex]}
        <div className="dot-container">
          {dots}
        </div>
      </div>



    </section>
  );
}

export default Project;
