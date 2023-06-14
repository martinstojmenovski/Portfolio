
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import { useEffect, useRef, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useMediaQuery,   Menu,
    MenuButton,
    MenuList,
    MenuItem, 
IconButton} from '@chakra-ui/react'
    import { HamburgerIcon} from '@chakra-ui/icons'


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
    const [black, setBlack] = useState("transparent")

    // black background navigation menu when scroll
    const blackNavbar = () => {
        if (window.scrollY >= 30) {
            setBlack("linear-gradient(to right, rgba(45, 0, 0, 1), rgba(227, 0, 0, 1) 100%)")
        } else {
            setBlack("transparent")
        }
    }
    window.addEventListener('scroll', blackNavbar)



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
    const desktopMenu = (
<Flex as="ul"
                    justifyContent="space-evenly"
                    width="60%"
                    margin="auto"
                    textAlign="center"
                    height="60px"
                    alignItems="center"
                >
                    <li style={{ ...styleList, border: "2px solid" }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)} >HOME</li>
                    <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</li>
                    <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</li>
                    <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONT-ACT</li>
                </Flex>
    )
    const mobileMenu = (
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem style={{ ...styleList, border: "2px solid" }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)} >HOME</MenuItem>
    <MenuItem style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</MenuItem>
    <MenuItem style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</MenuItem>
    <MenuItem style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</MenuItem>
  </MenuList>
</Menu>
    )

    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')





    return (
        <div>
            <nav style={{
                background: black ,
                width: "100%",
                position: "sticky",
                top: "0",
                margin: "auto",
                zIndex: "1",
                transition: "1s"
            }}
            >

        
        {isLargerThan480 ? desktopMenu : mobileMenu}
        




            </nav>
            <Dashboard dashboard={dashboard} />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}

