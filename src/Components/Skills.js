import "./skills.css"
function Skills({ skills }) {
    return (
      <div ref={skills} className="skills">
        <main>
        <h1>Let's connect</h1>
        <p>I am always interested about ux/ui design, frontend development,
           webflow development, digital consultant,
            new businesses, startups, coffee.</p>
        </main>
        <div className="_8icz"></div>
        <footer>
          <a href="https://www.linkedin.com/in/martin-stojmenovski-4780b9221/" target="_blank" ><p>Linkedin</p></a>
          <a href="https://github.com/martinstojmenovski?tab=repositories" target="_blank" ><p>Github</p></a>
          <a href="https://www.instagram.com/martin_stojmenovski/" target="_blank"><p>Instagram</p></a>

        </footer>
            
      </div>
    );
  }
  
  export default Skills;
  