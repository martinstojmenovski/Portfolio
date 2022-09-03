import './about.css'
function About({ about }) {
  
    return (
      <div ref={about} className="about">
            <h1 className='hello'>HELLO I AM MARTIN</h1>
            <ul>
              <li>Premium Desigh</li>
              <li>Amazing Photo</li>
              <li>Creative Ideas</li>
              <li>Unique Strategy</li>
            </ul>
            <div className='aboutme'>
              <p>Collaborative, creative and flexible Software Developer. 
              Create and design applications to solve real-world problems. 
              I bring my passion for humor and travel into each project, work environment. 
              A strong communication and time management skills 
              cultivated through a background in customer service.</p>
              <div className='dot'></div></div>
      </div>
    );
  }
  
  export default About;
  