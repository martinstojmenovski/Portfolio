import { Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard({ home }) {
    return (
        <div>
            <Container position={"relative"} top={"-100px"} ref={home} >
                <Heading pl={"10px"} pt={"200px"}>
                    Martin Stojmenovski
                </Heading>
                <Heading mb={'30px'} pl={"10px"} as='h5' size='sm'>
                    Software Engineer
                </Heading>
                <Text ml={"30px"}>
                    I am a Denver-based problem-solver specializing in JavaScript.
                    With a strong passion for writing clean and robust code,
                    I strive to deliver efficient solutions to complex challenges.
                    In addition to my programming skills,
                    I have a deep appreciation for photography, architecture, and a good cup of coffee.
                    Through my portfolio website,
                    I aim to showcase my expertise in JavaScript and demonstrate my creative interests outside of coding.
                    Explore my work and get a glimpse into my world of problem-solving and artistic inspiration.
                </Text>
            </Container>

        </div>
    )
}