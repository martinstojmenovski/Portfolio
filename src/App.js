import { useRef } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Skills from './Components/Skills'


function App() {
  const about = useRef(null)
  const project = useRef(null)
  const skills = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div className="App">
      <nav>
      <div><h3>Martin Stojmenovski</h3></div>
      <div>
        <ul className='navigation-list'>
          <li onClick={() => scrollToSection(about)} >About</li>
          <li onClick={() => scrollToSection(project)}>Project</li>
          <li onClick={() => scrollToSection(skills)}>Skills</li>
        </ul>
        </div>
        </nav>
      <Home />
      <About about={about} />
      <Project project={project} />
      <Skills skills={skills} />

    </div>
  );
}

export default App;
