import { Container, Heading, Text, background } from "@chakra-ui/react";
import Background from '../Components/images/pexels-burst-373965.jpg'
import { styleList, barStyle } from './DropdownMenu'
// import "./dashboard.css"
export default function Dashboard({ project, dashboard, scrollToSection, }) {
    console.log(project)
    const background = {
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }
    const styleArrow = {
        display: "block",
        width: "60px",
        height: "4px",
        backgroundColor: "orange",
        position: "absolute",
        right: "50%",

    }
    return (
        <section style={{ ...background, fontFamily: `Poiret One', cursive` }} ref={dashboard} id='DASHBOARD' className='DASHBOARD'>

            <Container
                p={0}
                // const breakpoints = {
                //     sm: '30em', // 480px
                //     md: '48em', // 768px
                //     lg: '62em', // 992px
                //     xl: '80em', // 1280px
                //     '2xl': '96em', // 1536px
                //   }
                maxW={["90%", '90%', '85%', '80%', '75%']}
                style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
                <Text
                    textShadow={"3px 4px 7px rgba(81,67,21,0.8)"} color={"white"} fontWeight={400} fontSize={40}>
                        
                    Hi,
                </Text>
                
                <Text style={{ fontFamily: 'Montserrat Alternates, sans-serif', textShadow: "3px 4px 7px rgba(81,67,21,0.8)"}} ml={"25px"} color={"white"} fontWeight={400} lineHeight={"120%"}
                    fontSize={["40px", '60px', '85px', '100px', '115px']}
                >
                    I create unique digital experiences.
                </Text>
            </Container>
            <div style={{
                cursor: "pointer", position: "absolute", padding:"50px", transform: " translatex(50%)", bottom: "50px", right:"50%",
                right: "50%",
            }} onClick={() => scrollToSection(project)}>
                <span style={{
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(-20px) rotate(-45deg)" }}></span>
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