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
        <section style={{...background, fontFamily:`Poiret One', cursive`}}  ref={dashboard}  id='DASHBOARD' className='DASHBOARD'>

            <Container w={['100%', '100%', '100%', '100%', '100%']}
             style={{position:"relative", top:"20%", fontFamily:'Montserrat Alternates, sans-serif'}}
             >
                <Text pl={"10px"} 
                // pt={[180, 200, 150]}
         
                 color={"white"}  fontWeight={400} fontSize={50}> 
                    Hi,
                </Text>
                <Text   style={{fontFamily:'Montserrat Alternates, sans-serif'}} ml={"30px"} color={"white"} fontSize={{  base: '40px', md: '70px', lg: '100px', xl: '96px' }} fontWeight={400}   >
                    I create unique digital experiences.


                </Text>
            </Container>

            </section>

        
    )
}