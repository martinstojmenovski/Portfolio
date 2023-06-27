
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import { useEffect, useRef, useState } from 'react'
import { Flex, position } from '@chakra-ui/react'
import {
    useMediaQuery, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


export default function Navigation() {
    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const skills = useRef(null)
    const dashboard = useRef(null)

    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        console.log(elementRef)
        window.scrollTo({
            top: elementRef.current.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    //useState to black navbar 
    const [black, setBlack] = useState({
        background: "linear-gradient(to right, rgba(45, 0, 0, 0.0), rgba(227, 0, 0, 0.0) 100%)",
        boxShadow: "none",
    })

    // black background navigation menu when scroll
    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= 50) {
            setBlack({
                background: "linear-gradient(to right, rgba(45, 0, 0, 0.9), rgba(227, 0, 0, 0.9) 100%)",
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            })
        } else {
            setBlack({
                background: "linear-gradient(to right, rgba(45, 0, 0, 0.0), rgba(227, 0, 0, 0.0) 100%)",
                boxShadow: "0 2px 10px 0 rgba(0,0,0, .0)",
            })
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Function to set a border to the selected page

    const makeBorderbox = () => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('nav li')
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
        backgroundColor: "transparent",
        fontWeight: "500",
        padding: "7px 10px",
        borderRadius: "5px",
    }
    const desktopMenu = (

        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height:"70px",
            padding:"0 40px",
            position: "sticky",
            top: "0",
            zIndex: "2",
            transition: "all 0.3s ease-in-out",
            // ...black,
        }}
        >
            <div style={{color: "white"}}>
                <li style={{ ...styleList, border: "2px solid", padding: "15px",borderRadius: "100px" }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)}>MS.</li>
            </div>
            <ul
                style={{display:"flex"}}
            >
                <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
                <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
                <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
            </ul>
        </nav>


    )

    const mobileMenu = (
        <nav style={{
            position: "sticky",
            top: "30px",
            zIndex: "1",
        }}
        >
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    style={{
                        backgroundColor: "rgb(234, 234, 234)",
                        borderRadius: "0 30% 30% 0",
                    }}
                />
                <MenuList as={"ul"} style={{ background: "linear-gradient(to right, rgba(45, 0, 0, 0.9), rgba(227, 0, 0, 0.9) 100%)" }}>
                    <MenuItem as={"li"} style={{ ...styleList, border: "2px solid" }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)} >HOME</MenuItem>
                    <MenuItem as={"li"} style={{ ...styleList, }} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</MenuItem>
                    <MenuItem as={"li"} style={{ ...styleList, }} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</MenuItem>
                    <MenuItem as={"li"} style={{ ...styleList, }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</MenuItem>
                </MenuList>
            </Menu>
        </nav>
    )


    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')


    return (
        <div>
            {isLargerThan480 ? desktopMenu : mobileMenu}
            <Dashboard dashboard={dashboard} />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}

