
import './arrows.scss'

function Arrows({ project, scrollToSection }) {


  return (
    <div className='loading'>
      <a onClick={() => scrollToSection(project)} className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </a>
    </div>
  
  // <div class="arrow"></div>

  );
}

export default Arrows;
