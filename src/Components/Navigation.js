
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
    const [black, setBlack] = useState("transparent")

    // black background navigation menu when scroll
    const blackNavbar = () => {
        if (window.scrollY >= 150) {
            setBlack("rgba(45, 0, 0, 1)")
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
        <nav style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
            background: black,
            transition: "background 1s linear",


        }}
        >
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
            <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</li>
        </Flex>
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
            <MenuList as={"ul"}>
                <MenuItem as={"li"} style={{ ...styleList, color: "#1b1b1b", border: "2px solid" }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)} >HOME</MenuItem>
                <MenuItem as={"li"} style={{ ...styleList, color: "#1b1b1b" }} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</MenuItem>
                <MenuItem as={"li"} style={{ ...styleList, color: "#1b1b1b" }} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</MenuItem>
                <MenuItem as={"li"} style={{ ...styleList, color: "#1b1b1b" }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</MenuItem>
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

