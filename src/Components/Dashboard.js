import { Container, Heading, Text, background } from "@chakra-ui/react";
import Background from '../Components/images/pexels-burst-373965.jpg'
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import { useState } from "react";

export default function Dashboard({ project, dashboard, scrollToSection, }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })

    const [sectionOpacity, setSectionOpacity] = useState(1)
    window.addEventListener('scroll', function () {

        setSectionOpacity(1 - this.window.pageYOffset / 550 + "")
    })
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
        opacity: sectionOpacity,
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
        opacity: sectionOpacity,
    }



    return (

        <section
       
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>


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
                        opacity:sectionOpacity,

                    }}
                >
                    <Text textShadow={"3px 4px 7px rgba(81,67,21,0.8)"} background={"transparent"} color={"white"} fontWeight={400} fontSize={40}>Hi,</Text>

                    <Text style={{ fontFamily: 'Montserrat Alternates, sans-serif', textShadow: "3px 4px 7px rgba(81,67,21,0.8)" }} ml={"25px"} color={"white"} fontWeight={400} lineHeight={"120%"}
                        fontSize={["40px", '45px', '55px', '70px', '95px']}
                    >
                        I create unique digital experiences.
                    </Text>
                </Container>
                <div style={{
                cursor: "pointer", position: "absolute", padding:"50px", transform: " translatex(50%)", top: "17%", right:"50%",
              
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