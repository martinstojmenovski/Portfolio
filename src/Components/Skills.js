import "./skills.css"
function Skills({ skills }) {
    return (
      <div ref={skills} className="skills">
        <main>
        <h1>Let's connect</h1>
        </main>
        <footer>
          <h4>Linkedin</h4>
          <h4>Github</h4>
          <h4>instagram</h4>

        </footer>
            
      </div>
    );
  }
  
  export default Skills;
  