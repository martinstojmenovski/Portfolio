import "./skills.css"
// import './contact.scss'
import './contactStyle.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs({ skills }) {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z66d3pe', 'template_75m1cfj', form.current, 'L4KiG_MtOqw6fwPNB')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section ref={skills} className="CONTACT" id="CONTACT" style={{ overflow: "hidden", }}>
      <main>


        <p id="header">Interested in working together?</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" class="feedback-input" placeholder="Name" />
          <input type="email" name="from_email" class="feedback-input" placeholder="Email" />
          <textarea type="text" name="message" placeholder="Message" class="feedback-input" ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>


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