import slides from "./projectContent";
import './project.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import classNames from "classnames";
import { barStyle } from "./DropdownMenu";

function Project({ project }) {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:  768px)' });
  const isSmallerThan480 = useMediaQuery({ query: '(min-width:  480px)' });

  const [activeIndex, setActiveIndex] = useState("");

  window.addEventListener("scroll", reveal)
  function reveal(){
    let reveals = document.querySelectorAll(".image-style")

    for(let i = 0; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 100;
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('revealActive')
      }else{
        reveals[i].classList.remove('revealActive')
      }
    }
  }



  return (
    <section ref={project} id='PROJECT' className='PROJECT'>
      <h1 style={{ padding: "90px 0 30px 0", color: "#FB8122", textAlign: "center", fontSize: isSmallerThan480 ? "1.5rem" : "5vw", fontWeight: "500" }}>EXPLORE PREVIOUS WORK</h1>

      {slides.map((slide, index) => (
        <div className={classNames("image-container",
         { "active-container": activeIndex === index })}
        >
          {activeIndex === index && <button onClick={() => setActiveIndex(!index)}
          style={{
            position:"absolute",
            right:"0",
            padding:"20px 10px"
          }} >
            <span style={{ ...barStyle, transform: "translateY(4px) rotate(45deg)" }} ></span>
            <span style={{ ...barStyle, transform:"translateY(-4px) rotate(-45deg)" }} ></span>
            </button>}
          {activeIndex === index && <h2  style={{
            position:"absolute",
            top:"15vh",
            padding:"20px 10px"
          }}   >{slide.name}</h2>}
          {activeIndex === index && <p style={{
            position:"absolute",
            top:"20vh",
            padding:"20px 10px"
          }}  >{slide.content}</p>}
          <div
            key={index}
            id="animatedElement"
            className={classNames("image-style", { "active-image": activeIndex === index })}
            onClick={() => setActiveIndex(index)}
            style={{
              backgroundImage: (activeIndex === index) ? `linear-gradient(rgb(20,30,48, 0.1), rgb(36,59,85, 0.1)), url(${slide.picture})` : `linear-gradient(rgb(20,30,48, 0.7), rgb(36,59,85, 0.7)), url(${slide.picture})`,
            }}
          >

          </div>
        </div>

      ))}
    </section>
  );
}

export default Project;

