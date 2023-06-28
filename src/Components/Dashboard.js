import { Container, Heading, Text, background } from "@chakra-ui/react";

export default function Dashboard({ dashboard }) {
    const background = {
        position: "relative",
        height: "80vh",
        background:"rgb(30, 30, 30)",
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
        <section style={{...background, fontFamily:`Poiret One', cursive`}}  ref={dashboard}  id='DASHBOARD' className='DASHBOARD'>
            
            <Container width={['100%', '80%']} 
             
             >
                <Text pl={"10px"} pt={[180, 200, 100]} color={"#ececec"}  fontSize={50}>
                    Hi,
                </Text>
                <Text ml={"30px"} color={"#ececec"} fontSize={{  base: '49px', md: '90px', lg: '100px', xl: '116px' }}  >
                    I create unique digital experiences.
                   
                
                </Text>
            </Container>
            
            </section>

        
    )
}