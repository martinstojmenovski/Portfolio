import "./skills.css"
function Skills({ skills }) {
  return (
    <section ref={skills} className="CONTACT" id="CONTACT">
      <main>
    
          <h1 >LET'S CONNECT</h1>
          <p>I am always interested about ux/ui design, frontend development,
            webflow development, digital consultant,
            new businesses, startups, coffee.</p>
        <ul>
          <a href="mailto:martinstojmenovskim@gmail.com"><li><div className="dot"><div className="pillar"><div className="wire"></div></div></div>Email</li></a>
          <a href="https://www.linkedin.com/in/martin-stojmenovski-4780b9221/" target="_blank" ><li><div className="dot"><div className="pillar"><div className="wire"></div></div></div>Linkedin</li></a>
          <a href="https://github.com/martinstojmenovski?tab=repositories" target="_blank" ><li><div className="dot"><div className="pillar"></div></div>Github</li></a>
        </ul>

     
        
         


      </main>

      <footer>
        <p style={{ color: "white", fontSize:'12px'}}>©2020 Privacy policy</p>

      </footer>

    </section>
  );
}

export default Skills;
