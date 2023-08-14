import { Container, Heading, Text, background } from "@chakra-ui/react";
import Background from '../Components/images/pexels-burst-373965.jpg'
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import { useState } from "react";
import TheCircle from "./TheCircle";

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
        height: "120vh",
        width: "100vw",
        background: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${BackgroundMobile})`,
        // background:"#1e1e1e",
        opacity:  sectionOpacity,
        // opacity:  "1",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
    const styleArrow = {
        display: "block",
        width: "60px",
        height: "4px",
        backgroundColor: "orange",
        position: "absolute",
        right: "50%",
        // opacity: 1 - sectionOpacity,
    }



    return (

        <section
       
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>

            <TheCircle />
            <div style={{
                ...backgroundMobile,
            }}>
               
            </div>
            <Container
                    p={0}  
                    maxW={["90%", '90%', '85%', '80%', '75%']}
                    style={{
                        position: "absolute", top: "40vh", left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontFamily: 'Montserrat Alternates, sans-serif',
                        // opacity: 1 - sectionOpacity,

                    }}
                >
                    <Text  background={"transparent"}  fontWeight={400} fontSize={40}>Hi,</Text>

                    <Text style={{ fontFamily: 'Montserrat Alternates, sans-serif',  }} ml={"25px"}  fontWeight={400} lineHeight={"120%"}
                        fontSize={["40px", '45px', '55px', '70px', '95px']}
                    >
                        I create unique digital experiences.
                    </Text>
                </Container>
                <div style={{
                cursor: "pointer", position: "relative", padding:"50px", transform: " translatex(50%)", top: "65vh", right:"50%",
              
            }} onClick={() => scrollToSection(project)}>
                <span style={{
                    ...styleArrow, transform: " translatex(50%)  translatex(-20px) rotate(-45deg)" }}></span>
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