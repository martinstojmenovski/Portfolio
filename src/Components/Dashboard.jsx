import { Container, Heading, Text, background } from "@chakra-ui/react";

import Background from "./images/denver-colorado.jpg";

export default function Dashboard({ dashboard }) {
    const background = {
        position: "relative",
        top: "-70px",
        height: "80vh",
        backgroundImage: `url(${Background})` ,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 40%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }
    const overlay = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, rgba(45, 0, 0, 0.7), rgba(227, 0, 0, 0.8) 100%)",
    }
    return (
        <section style={background}  ref={dashboard}  id='DASHBOARD' className='DASHBOARD'>
            <div style={overlay}>
            <Container  top={"0"}
             
             >
                <Heading pl={"10px"} pt={"150px"} color={"#ececec"} >
                    Martin Stojmenovski
                </Heading>
                <Heading mb={'30px'} pl={"10px"} as='h5' size='sm' color={"#ececec"}>
                    Software Engineer
                </Heading>
                <Text ml={"30px"} color={"#ececec"} >
                    I am a Denver-based problem-solver specializing in JavaScript.
                    With a strong passion for writing clean and robust code,
                    I strive to deliver efficient solutions to complex challenges.
                    In addition to my programming skills,
                    I have a deep appreciation for photography, architecture, and a good cup of coffee.
                
                </Text>
            </Container>
            </div>
            </section>

        
    )
}