
import { useState } from "react"
import "./project.css"
import images from "./projectsText"
import SwiperJsWork from './SwiperJsWork'
import { useMediaQuery } from 'react-responsive'

function Project({ project, projectsText }) {
  // useState declared to change index of an array slider.
  const [currentIndex, setCurrentIndex] = useState(0)

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:  768px)' })


 

  return (
    <section ref={project} id='PROJECT' className='PROJECT'>
      <h1 style={{paddingTop:"80px"}}>EXPLORE PREVIOUS WORK</h1>

      {isDesktopOrLaptop ? <div className='projects'>
        {images.map(((image, index) => <div key={index}>{image}</div>))}
      </div> :  <SwiperJsWork  /> } 
      
      

     



    </section>
  );
}

export default Project;
