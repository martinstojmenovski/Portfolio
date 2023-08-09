import './about.css'
function About({ about }) {

  return (
    <div ref={about}>
      <section className='ABOUT' id='ABOUT' >
        <div className='about-page'>
          <div className="about-text">
            <h1>HELLO, I AM MARTIN</h1>
            <ul >
              <li>Premium Design</li>
              <li>Amazing Photo</li>
              <li>Creative Ideas</li>
              <li>Unique Strategy</li>
            </ul>
            <p>Experienced and adaptable Software Engineer with a passion for innovative solutions. My unique blend
              of creativity, humor, and love for travel infuse each project with a fresh perspective. Alongside my
              technical expertise, I possess strong communication and time management skills honed through a
              customer service background.
            </p>

          </div>
          <div className='professional-photo'>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
