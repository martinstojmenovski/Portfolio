import "./skills.css"
// import './contact.scss'
import './contactStyle.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useMediaQuery } from 'react-responsive';


export default function ContactUs({ skills }) {
const [succsessMessage, setSuccessMessage] = useState('SUBMIT')
const isSmallerThan480 = useMediaQuery({ query: '(min-width:  480px)' });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z66d3pe', 'template_75m1cfj', form.current, 'L4KiG_MtOqw6fwPNB')
      .then((result) => {
        if(result.status === 200){
          setSuccessMessage('Email sent successfully!')
          setTimeout(function() {
            setSuccessMessage("SUBMIT")
           }, 4000);
        }
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  
    

   
  
  
      

  return (
    <section ref={skills} className="CONTACT" id="CONTACT" style={{ overflow: "hidden", }}>
      <main className="mainDiv">


        <div id="header" style={{fontSize: isSmallerThan480 ? "2rem" : "5vw",  padding: "80px 0 0px 0", textAlign:"center"}}>
          Interested in working together?</div>
        <div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" className="feedback-input" placeholder="Name" required/>
          <input type="email" name="from_email" className="feedback-input" placeholder="Email" required/>
          <textarea type="text" name="message" placeholder="Message" className="feedback-input" required></textarea>
          <input type="submit" value={succsessMessage} />
        </form>
        </div>


        <div id="social-media">Find me on
          <ul>
            <a href="https://www.linkedin.com/in/martin-stojmenovski-4780b9221/" rel="noopener" >Linkedin</a>
            <a href="https://github.com/martinstojmenovski?tab=repositories" rel="noopener" >Github</a>
          </ul>
        </div>


      </main>


    </section>
  );
}