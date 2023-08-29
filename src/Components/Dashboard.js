import { Container, Heading, Text, background } from "@chakra-ui/react";
import Background from '../Components/images/pexels-burst-373965.jpg'
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import { useState } from "react";
import TheCircle from "./TheCircle";
import "./theCircle.css"

export default function Dashboard({ project, dashboard, scrollToSection, sectionOpacity }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })


    const background = {
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${Background})`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        WebkitBackgroundPosition: "center",

        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",

        backgroundAttachment: "fixed",
        WebkitBackgroundAttachment: "fixed ",
    }
    const backgroundMobile = {
        
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${BackgroundMobile})`,
        // background:"#1e1e1e",
        opacity:  sectionOpacity,
        // opacity:  "0",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        // top:"0",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // zIndex:"-1"
        
    }
    const styleArrow = {
        display: "block",
        width: "60px",
        height: "4px",
        backgroundColor: "orange",
        position: "absolute",
        right: "50%",
    }

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });

    return (

        <section 
        style={{height:"100vh",
        height: `calc(var(--vh, 1vh) * 100)`,
        overflow:"hidden"}}
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>
           
            <TheCircle />
            <div style={{
                ...backgroundMobile,
            }}>
                
            </div>
           
            <div
                // p={0}  
                // maxW={["90%", '90%', '85%', '80%', '75%']}
                style={{
                    padding:"170px 20px 20px",
                    // textAlign:"center",
                    // position: "absolute", 
                    // left: "50%",top:"50%",
                    // transform: "translate(-50% -50%)",
                 
                
                    // paddingTop:"100px"



                }}
            >
                <h2 style={{ fontSize: "2.5em",}}> Hi,</h2>

                <h4 style={{
                    fontSize: "2.3rem",
                    marginLeft: "25px",
                    
                 
                }}
                // ml={"25px"}
                //  fontWeight={400} 
                //    lineHeight={"120%"}
                // fontSize={["40px", '45px', '55px', '70px', '95px']}
                  
                >
                    I create unique digital experiences.
                </h4>
            </div>
            <div style={{
                cursor: "pointer", position: "relative",  padding: "50px", transform: " translatex(50%)", right: "50%", overflow:"hidden"

            }} onClick={() => scrollToSection(project)}>
                <span style={{
                    ...styleArrow, transform: " translatex(50%)  translatex(-20px) rotate(-45deg)"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)"
                }}> </span>
                <span style={{
                    ...styleArrow,
                    transform: " translatex(50%) translatex(-20px) rotate(-45deg)",
                    bottom: "20px"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)",
                    bottom: "20px"
                }}> </span>

            </div>

        </section>



    )
}