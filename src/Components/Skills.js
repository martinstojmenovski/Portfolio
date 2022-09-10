import "./skills.css"
function Skills({ skills }) {
    return (
      <div ref={skills} className="skills">
        <main>
          <div>
        <h1 >Let's connect</h1>
         <div className="big-dot"></div>
         </div>
         <div ><ul>
            <a href="https://www.linkedin.com/in/martin-stojmenovski-4780b9221/" target="_blank" ><li>Linkedin</li></a>
          <a href="https://github.com/martinstojmenovski?tab=repositories" target="_blank" ><li>Github</li></a>
          <a href="https://www.instagram.com/martin_stojmenovski/" target="_blank"><li>Instagram</li></a>
          </ul></div>
        
            <div className='last-words'>
              <p>I am always interested about ux/ui design, frontend development,
           webflow development, digital consultant,
            new businesses, startups, coffee.</p>
              <div className='dot'></div></div>
            
          
        </main>
       
        <footer>
        

        </footer>
            
      </div>
    );
  }
  
  export default Skills;
  