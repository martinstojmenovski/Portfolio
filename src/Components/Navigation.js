
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import DropdownMenu from './DropdownMenu'
import { styleList, barStyle } from './DropdownMenu'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Navigation() {
    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const dashboard = useRef(null)

    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })
    // ProgresBar function
    const [progressBar, setProgresBar] = useState(0)
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

    // black background navigation menu when scroll
    const handleScroll = () => {
        if (window.scrollY >= 50 && isDesktopOrLaptop) {

            document.getElementsByClassName('PROJECT')[0].style.opacity = "0"
            document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(-40px)"
            document.getElementsByClassName('ABOUT')[0].style.opacity = "0"
            document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(-40px)"
            document.getElementsByClassName('CONTACT')[0].style.opacity = "0"
            document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(-40px)"

        } else {

            document.getElementsByClassName('PROJECT')[0].style.opacity = "1"
            document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(0)"
            document.getElementsByClassName('ABOUT')[0].style.opacity = "1"
            document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(0)"
            document.getElementsByClassName('CONTACT')[0].style.opacity = "1"
            document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(0)"

        }

    }
    window.addEventListener('scroll', handleScroll)





    const styleLogo = {
        position: "relative",
        borderBottom: "2px solid",
        borderRadius: "50%",
        fontFamily: `Ephesis`,
        fontSize: "30px",
        color: "white",
    }

    const desktopMenu = (
        <ul style={{ display: "flex" }} >
            <li style={{ ...styleList, transition: "transform 200ms linear, opacity 200ms linear" }} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={{ ...styleList, transition: "transform 200ms linear, opacity 200ms linear", transitionDelay: "200ms", }} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
            <li style={{ ...styleList, transition: "transform 200ms linear, opacity 200ms linear", transitionDelay: "350ms" }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
        </ul>
    )

    return (
        <div>
            <div className='progress-bar' style={{ position:"fixed", top:"66px",
    // /* top: 48.5px; */
    left: "0",
    height: "2px",
    background: "#ecebeb",
    // z-index: 3;
    transition: "width 30ms linear", width: `${progressBar}%` }}></div>
            <nav style={{
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                zIndex: "2",
                transition: "backdrop-filter 300ms linear"
            }}
            >
                
                <div style={{ display: "flex" }} >
                    <li style={{ ...styleList, ...styleLogo, }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)}>MS&nbsp;
                        <span style={{ backgroundColor: "orange", height: "5px", width: "5px", borderRadius: "50%", display: "inline-block" }}>  </span></li>
                </div>
                <div>
                    {isDesktopOrLaptop && desktopMenu}

                    <DropdownMenu about={about} project={project} skills={skills} dashboard={dashboard} scrollToSection={scrollToSection} />
                </div>
            </nav>

            <Dashboard dashboard={dashboard} scrollToSection={scrollToSection} project={project} />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}

