import './about.css'
function About({ about }) {

  return (
    <div >
      <section className='ABOUT' id='ABOUT' ref={about} >
        <div className='about-page'>
          <div className='professional-photo'>


          </div>
          <div className="about-text">
            <h1>HELLO, I AM MARTIN</h1>
            {/* <ul >
              <li>Premium Design</li>
              <li>Amazing Photo</li>
              <li>Creative Ideas</li>
              <li>Unique Strategy</li>
            </ul> */}
            <p>Welcome to my corner of the web! 
              Passionate Software Engineer dedicated to crafting immersive and user-friendly digital experiences.
               With a keen eye for design and a commitment to cutting-edge technologies, 
               I bring ideas to life in the digital realm. 
               Let's collaborate to elevate your online presence and create visually stunning, 
               responsive websites that captivate your audience. 
               Ready to transform your vision into a pixel-perfect reality? 
               Let's connect and build something extraordinary together!
            </p>

          </div>



        </div>
      </section>
    </div>
  );
}

export default About;
