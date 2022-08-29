import { useRef, useState } from 'react'
import Home from './Home'
import About from './About'
import Project from './Project'
import Skills from './Skills'

function Navbar() {

    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const home = useRef(null)

    //useState to blur navbar
    const [blur, setBlur] = useState(false)

    // useState to dropdown menu
    const [hamburger, setHamburger] = useState(true)



    //Page navigation function
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
        if (elementRef.current.className === "home") {
            setHamburger(hamburger)
        } else {
            setHamburger(!hamburger)
        }
    }

    // blur navigation menu when scroll
    const blurNavbar = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 80) {
            setBlur(true)
        } else {
            setBlur(false)
        }
    }
    window.addEventListener('scroll', blurNavbar)


    // dropdown menu function
    const showHamburger = () => {
        setHamburger(!hamburger)
    }

    return (
        <div>
            <nav className={blur ? 'navbar active' : 'navbar'} >
                <div>
                    <h3 className='brand-name' onClick={() => scrollToSection(home)} >Martin Stojmenovski</h3>
                </div>
                <div>
                    <div className={hamburger ? 'hamburger' : 'hamburger active'} onClick={showHamburger} >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <div className={hamburger ? "sidebar" : "sidebar-active"} >
                        <ul>
                            <li onClick={() => scrollToSection(about)} >About</li>
                            <li onClick={() => scrollToSection(project)}>Projects</li>
                            <li onClick={() => scrollToSection(skills)}>Skills</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Home home={home} />
            <About about={about} />
            <Project project={project} />
            <Skills skills={skills} />
        </div>
    );
}

export default Navbar;
