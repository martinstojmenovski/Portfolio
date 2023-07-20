
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import DropdownMenu from './DropdownMenu'
import { styleList, barStyle } from './DropdownMenu'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery, } from '@chakra-ui/react'


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

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

    // black background navigation menu when scroll
    const handleScroll = () => {
        if (window.scrollY >= 50) {
            document.getElementsByClassName('PROJECT')[0].style.opacity = "0"
            document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(-40px)"
            document.getElementsByClassName('ABOUT')[0].style.opacity = "0"
            document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(-40px)"
            document.getElementsByClassName('CONTACT')[0].style.opacity = "0"
            document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(-40px)"
            document.getElementsByClassName('hamburgerButton')[0].style.transform = "translatex(0)"
            document.getElementsByClassName('hamburgerButton')[0].style.opacity = "1"
            document.getElementsByClassName('hamburgerButton')[0].style.transitionDelay = "500ms"
        } else {
            document.getElementsByClassName('PROJECT')[0].style.opacity = "1"
            document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(0)"
            document.getElementsByClassName('ABOUT')[0].style.opacity = "1"
            document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(0)"
            document.getElementsByClassName('CONTACT')[0].style.opacity = "1"
            document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(0)"
            document.getElementsByClassName('hamburgerButton')[0].style.transform = "translateX(60px)"
            document.getElementsByClassName('hamburgerButton')[0].style.opacity = "0"
            document.getElementsByClassName('hamburgerButton')[0].style.transitionDelay = "100ms"
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
            <nav style={{
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                zIndex: "2",

            }}
            >
                <div style={{ display: "flex" }} >
                    <li style={{ ...styleList, ...styleLogo, }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)}>MS&nbsp;
                        <span style={{ backgroundColor: "orange", height: "5px", width: "5px", borderRadius: "50%", display: "inline-block" }}>  </span></li>
                </div>
                <div>
                    { isLargerThan480? desktopMenu : <DropdownMenu about={about} project={project} skills={skills} dashboard={dashboard} scrollToSection={scrollToSection} /> }
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

