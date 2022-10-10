import { useEffect, useRef, useState } from 'react'
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

    //useState progressBar
    const [progressBar, setProgresBar] = useState(0)

    // useState to dropdown menu
    const [hamburger, setHamburger] = useState(true)



    // ProgresBar function
    const scrollProgress = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        // console.log(scrolled)
        setProgresBar(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollProgress)

        return () => window.removeEventListener('scroll', scrollProgress)
    }, [])





    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
        setHamburger(!hamburger)
        document.body.style.overflow = ""
    }

    // blur navigation menu when scroll
    const blurNavbar = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 1) {
            setBlur(true)
        } else {
            setBlur(false)
        }
    }
    window.addEventListener('scroll', blurNavbar)


    // dropdown menu function - overflow hidden to stop page from scrolling
    const showHamburger = (index) => {
        if (hamburger) {
            document.body.style.overflow = "hidden"
            setHamburger(!hamburger)
        } else {
            setHamburger(!hamburger)
            document.body.style.overflow = ""
        }
    }
    const closeHamburger = () => {
        if (!hamburger) {
            setHamburger(!hamburger)
            document.body.style.overflow = ""
        }
    }

    return (
        <div>

            <nav className={blur ? 'navbar active' : 'navbar'} >
                <div className={blur ? 'min-768 active' : 'min-768'}>
                    <ul>
                        <li  className={blur ? 'li-768 active' : 'li-768'} onClick={() => scrollToSection(home)} >HOME</li>
                        <li className={blur ? 'li-768 active' : 'li-768'} onClick={() => scrollToSection(about)} >ABOUT</li>
                        <li className={blur ? 'li-768 active' : 'li-768'} onClick={() => scrollToSection(project)} >PROJECTS</li>
                        <li className={blur ? 'li-768 active' : 'li-768'} onClick={() => scrollToSection(skills)} >CONTACT</li>
                    </ul>
                </div>
                <div className={hamburger ? 'dropmenu' : 'dropmenu active'} >

                    <div className='progress-bar' style={{ width: `${progressBar}%` }}></div>

                    <div className='logo' onClick={closeHamburger}>
                        <h3 className={blur ? 'brand active' : 'brand'} >Martin Stojmenovski</h3>
                    </div>

                    <div className={hamburger ? "hamburger" : "hamburger active"}  >
                        <div className={blur ? 'bars active' : 'bars'} onClick={showHamburger}>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                        </div>
                        <div className={hamburger ? "sidebar" : "sidebar active"} >
                            <ul>
                                <li onClick={() => scrollToSection(home)} >HOME</li>
                                <li onClick={() => scrollToSection(about)} >ABOUT</li>
                                <li onClick={() => scrollToSection(project)} >PROJECTS</li>
                                <li onClick={() => scrollToSection(skills)} >CONTACT</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
            <Home home={home} />
            <About about={about} />
            <div className='project'><Project project={project} /></div>
            <Skills skills={skills} />
        </div>
    );
}

export default Navbar;
