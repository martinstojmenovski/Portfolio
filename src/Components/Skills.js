import "./skills.css"
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react'
function Skills({ skills }) {
  return (
    <section ref={skills} className="CONTACT" id="CONTACT">
      <main>


        <p id="header">Interested in working together?</p>
         <div id="email">
          {/* <p style={{ paddingRight: '7px' }}>Email me </p> <a style={{ color: ' rgb(209, 21, 21)' }} href="mailto:martinstojmenovskim@gmail.com">martinstojmenovskim@gmail.com</a>  */}
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <Textarea placeholder='Your message' />
        </div>
        <div id="social-media">Find me on
          <ul>
            <a href="https://www.linkedin.com/in/martin-stojmenovski-4780b9221/" target="_blank" ><li>Linkedin</li></a>
            <a href="https://github.com/martinstojmenovski?tab=repositories" target="_blank" ><li>Github</li></a>
          </ul>
        </div>







      </main>


    </section>
  );
}

export default Skills;
