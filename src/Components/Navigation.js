import Home from './Home'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import { useEffect, useRef, useState } from 'react'
function Navigation() {
    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const home = useRef(null)

        //useState to blur navbar 
        const [blur, setBlur] = useState("transparent")

    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
        // setHamburger(!hamburger)
        // document.body.style.overflow = ""   
    }

        // blur navigation menu when scroll
    const blurNavbar = () => {
        if (window.scrollY >= 30) {
            setBlur("#1b1b1b")  
        } else {
            setBlur("transparent")
        }
    }
    window.addEventListener('scroll', blurNavbar)



        // Function to set a border to the selected page
       
        const makeBorderbox = () => {
            const sections = document.querySelectorAll('section')
            const navLi = document.querySelectorAll('nav ul li') 
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop
                if (window.scrollY + 450 >= sectionTop) {
                    current = section.getAttribute('class')
                }
            })
            navLi.forEach(li => {
                li.style.border = "2px solid transparent"
                if (li.classList.contains(current)) {
                    li.style.border = "2px solid"
                }
            })
        }
        window.addEventListener('scroll', makeBorderbox)


    const styleList = {
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        fontWeight: "700",
        padding: "7px 10px",
        borderRadius: "5px",
    }

const border = {}


    return (
        <div>
            <nav style={{
                background: blur,
                width: "100%",
                position: "sticky",
                top: "0",
                margin: "auto",
                zIndex: "1",
                transition: "1s"
            }}
            >
                <ul style={{
                    display: "flex",
                   justifyContent: "space-evenly",
                   width: "60%",
                   margin: "auto",
                   textAlign: "center",
                   height: "60px",
                   alignItems: "center",
                }}>
                    <li style={{...styleList, border: "2px solid"}} className={'HOME'} onClick={() => scrollToSection(home)} >HOME</li>
                    <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</li>
                    <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</li>
                    <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</li>
                </ul>
            </nav>
            <Home  home={home}  />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>
    )
}

export default Navigation