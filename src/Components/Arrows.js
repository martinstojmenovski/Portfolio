// import './arrows.css'
import './arrows.scss'

function Arrows({ project, scrollToSection }) {


  return (
    <div className='loading'>
      <a onClick={() => scrollToSection(project)} class="arrow-container">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </a>
    </div>
  
  // <div class="arrow"></div>

  );
}

export default Arrows;
