import slides from "./projectContent";
import './project.css';
import { useMediaQuery } from 'react-responsive';



function Project({ project }) {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:  738px)' });
  const isSmallerThan480 = useMediaQuery({ query: '(min-width:  480px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width:  1024px)' });



  window.addEventListener("scroll", () => {reveal(); descriptions()})
  function reveal() {
    let reveals = document.querySelectorAll(".image-style")
    
    for (let i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
     
      let revealpoint = 100;
      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
       
      } else {
        reveals[i].classList.remove('active')
       
      }
    }
  }
  function descriptions() {
    let descriptions = document.querySelectorAll(".descriptions")
    for (let i = 0; i < descriptions.length; i++) {
      let windowheight = window.innerHeight;
      let descriptionstop = descriptions[i].getBoundingClientRect().top;
      let revealpoint = 100;
      if (descriptionstop < windowheight - revealpoint) {
    
        descriptions[i].classList.add('active')
      } else {
    
        descriptions[i].classList.remove('active')
      }
    }
  }



  return (
    <section ref={project} id='PROJECT' className='PROJECT' style={{ overflow: "hidden" }}>
      <h1 style={{
        padding: "90px 0 30px 0",
        color: "#FB8122",
        textAlign: "center",
        fontSize: isSmallerThan480 ? "1.5rem" : "5vw", fontWeight: "500"
      }}>EXPLORE PREVIOUS WORK</h1>

      {slides.map((slide, index) =>

      (
        <div key={index} style={{
           display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse", 
            justifyContent: "center",
             overflow: "visible", 
             margin: isBigScreen ? "80px auto" : "50px auto" ,
            position:"relative",
             marginRight: isBigScreen ? index % 2 === 0 ? "0" : "100px" : null, // Add margin-left for the second element
             marginLeft: isBigScreen ? index % 2 === 0 ? "100px" : "0" : null, // Add margin-right for the first element
             
             
          
             }}>
          <div className="descriptions"
            style={{
              padding: "8px",
              textAlign: index % 2 === 0 ? "right" : "left",
              display:isDesktopOrLaptop? "block" : "none",
            }}>
            <h3 style={{
              transform: "scale(1, 3)", fontSize: "2.3rem", fontWeight: "bold", position: "relative",
              top: "30%"
            }} >{slide.name} </h3>
            <p style={{
              position: "relative",
              top: "35%"
            }}>{slide.content}</p>
          </div>
          <div
            className="image-style"
            style={{backgroundImage: `linear-gradient(rgb(20,30,48, 0.7), rgb(36,59,85, 0.7)), url(${slide.picture})`}}
          >




          </div>
        </div>

      ))}
    </section>
  );
}

export default Project;

