import { Container, Heading, Text, background } from "@chakra-ui/react";
import Background from '../Components/images/pexels-burst-373965.jpg'
// import "./dashboard.css"
export default function Dashboard({ dashboard }) {
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
                maxW={["95%", '90%', '85%', '80%', '75%']}
                style={{ position: "absolute", top: "45%", left:"50%", transform: "translate(-50%, -50%)", fontFamily: 'Montserrat Alternates, sans-serif' }}
            >
                <Text
                    color={"white"} fontWeight={400} fontSize={40}>
                    Hi,
                </Text>

                <Text style={{ fontFamily: 'Montserrat Alternates, sans-serif' }} ml={"25px"} color={"white"} fontWeight={400} lineHeight={"120%"}
                    fontSize={["40px", '60px', '85px', '100px', '115px']}
                >
                    I create unique digital experiences.
                </Text>
            </Container>
        </section>


    )
}