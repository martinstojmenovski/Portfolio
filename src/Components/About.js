import './about.css'
function About({ about }) {

  return (
    <div  ref={about}>
    <section  className='ABOUT' id='ABOUT' >
      <div    className='about-page'>
      <div  className="about-text">
        <h1>HELLO, I AM MARTIN</h1>
        <ul >
          <li>Premium Desigh</li>
          <li>Amazing Photo</li>
          <li>Creative Ideas</li>
          <li>Unique Strategy</li>
        </ul>
        <p>Collaborative, creative and flexible Software Developer.
          Create and design applications to solve real-world problems.
          I bring my passion for humor and travel into each project, work environment.
          A strong communication and time management skills
          cultivated through a background in customer service.</p>
      </div>

      <div className='section-photo'>
        <div  className='professional-photo'>
       
        </div>
      </div>
      </div>
    </section>
    </div>
  );
}

export default About;
