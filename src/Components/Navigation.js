
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
    IconButton,
    Button,
    CloseButton

} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon, } from '@chakra-ui/icons'



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
            li.style.borderBottom = "2px solid transparent"
            if (li.classList.contains(current)) {
                li.style.borderBottom = "2px solid"
            }

        })
    }
    window.addEventListener('scroll', makeBorderbox)


    const styleList = {
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        fontWeight: "500",
        padding: "10px",
    }
    const styleLogo = {
        position: "relative",
        top: "10px",
        borderBottom: "2px solid",
        borderRadius: "50%",
        fontFamily: `Ephesis`,
        fontSize: "30px",
    }
    const desktopMenu = (

        <ul style={{ display: "flex" }} >
            <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
            <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
        </ul>
    )

    const mobileMenu = (

        // <Menu>
        //     <MenuButton
        //         as={IconButton}
        //         aria-label='Options'
        //         icon={<HamburgerIcon />}
        //         variant='outline'
        //         style={{
        //             backgroundColor: "rgb(234, 234, 234)",
        //             borderRadius: "0 30% 30% 0",
        //         }}
        //     />
        //     <MenuList as={"ul"}>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'PROJECT'} onClick={() => scrollToSection(project)} >WORK</MenuItem>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'ABOUT'} onClick={() => scrollToSection(about)} >ABOUT</MenuItem>
        //         <MenuItem as={"li"} style={{ ...styleList, }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >CONTACT</MenuItem>
        //     </MenuList>
        // </Menu>

        <div>
            {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                        {isOpen ? <CloseButton /> : <HamburgerIcon />}
                    </MenuButton>
                    <ul style={{ display: "flex" }} >
                        <li style={styleList} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
                        <li style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
                        <li style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
                    </ul>
                </>   
            )}



 <div className={hamburger ? 'dropmenu' : 'dropmenu active'}>
                   
                    <div className={hamburger ? 'rest' : 'rest active'} onClick={closeHamburger}></div>

                    <div className={hamburger ? "hamburger" : "hamburger active"}  >
                        <div className={blur ? 'bars1 active' : 'bars1'} onClick={showHamburger}>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                            <span className={blur ? 'bar active' : 'bar'}></span>
                        </div>
                        <div className={hamburger ? "sidebar" : "sidebar active"} >
                          <div className={blur ? 'bars2 active' : 'bars2'} onClick={showHamburger}>
                            <span  className='bar2'></span>
                            <span  className='bar2'></span>
                            <span className='bar2'></span>
                        </div>
                            {ulHolder}
                        </div>
                    </div>


                </div>
            
        </div>
      
               

    )


    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')


    return (
        <div>

            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                position: "sticky",
                top: "0",
                zIndex: "2",
            }}
            >
                <div style={{ color: "white" }}>
                    <li style={{ ...styleList, ...styleLogo }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)}>MS<span style={{ color: "orange" }}>.</span></li>
                </div>
                {isLargerThan480 ? desktopMenu : mobileMenu}
            </nav>
            <Dashboard dashboard={dashboard} />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}

