import './about.css'
function About({ about }) {
  
    return (
      <div className='about-page'>
      <div ref={about} className="about">
        
        <div><h1 className='hello'>HELLO, <br/> I AM MARTIN</h1></div>
            <div><ul>
              <li>Premium Desigh</li>
              <li>Amazing Photo</li>
              <li>Creative Ideas</li>
              <li>Unique Strategy</li>
            </ul></div>
            <div className='aboutme'>
              <div><p>Collaborative, creative and flexible Software Developer. 
              Create and design applications to solve real-world problems. 
              I bring my passion for humor and travel into each project, work environment. 
              A strong communication and time management skills 
              cultivated through a background in customer service.</p></div>
              <div className='dot'></div>
              </div>
             
      </div>
      <footer></footer> 
      </div>
    );
  }
  
  export default About;
  