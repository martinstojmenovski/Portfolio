import "./skills.css"
// import './contact.scss'
import './contactStyle.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';


export default function ContactUs({ skills }) {
const [succsessMessage, setSuccessMessage] = useState()
const isSmallerThan480 = useMediaQuery({ query: '(min-width:  480px)' });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z66d3pe', 'template_75m1cfj', form.current, 'L4KiG_MtOqw6fwPNB')
      .then((result) => {
        
        if(result.status === 200){
          setSuccessMessage('Email sent successfully!')
          setTimeout(function() {
            setSuccessMessage("")
           }, 4000);
        }
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  
    

   
  
  
      

  return (
    <section ref={skills} className="CONTACT" id="CONTACT" style={{ overflow: "hidden", }}>
      <main>


        <p id="header" style={{fontSize: isSmallerThan480 ? "2rem" : "5vw"}}>Interested in working together?</p>







        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" class="feedback-input" placeholder="Name" required/>
          <input type="email" name="from_email" class="feedback-input" placeholder="Email" required/>
          <textarea type="text" name="message" placeholder="Message" class="feedback-input" required></textarea>
          <input type="submit" value="SUBMIT" />
        </form>

        <div className="success-popup">{succsessMessage}</div>








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