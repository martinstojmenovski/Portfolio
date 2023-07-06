
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import DropdownMenu from './DropdownMenu'
import { styleList, barStyle } from './DropdownMenu'
import styled, { keyframes } from 'styled-components'  

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

    //useState to black navbar 
    const [hamburger, setHamburger] = useState(true)
    //    const [isLargerThan480] = useMediaQuery('(min-width: 480px)')

    // black background navigation menu when scroll
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 50) {
                setHamburger(false)
            document.getElementsByClassName('PROJECT')[0].style.opacity = "0" 
            document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(-40px)" 
            document.getElementsByClassName('ABOUT')[0].style.opacity = "0" 
            document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(-40px)" 
            document.getElementsByClassName('CONTACT')[0].style.opacity = "0" 
            document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(-40px)" 

            } else {
                setHamburger(true)
                document.getElementsByClassName('PROJECT')[0].style.opacity = "1"
                document.getElementsByClassName('PROJECT')[0].style.transform = "translateY(0)" 
                document.getElementsByClassName('ABOUT')[0].style.opacity = "1"
                document.getElementsByClassName('ABOUT')[0].style.transform = "translateY(0)" 
                document.getElementsByClassName('CONTACT')[0].style.opacity = "1"
                document.getElementsByClassName('CONTACT')[0].style.transform = "translateY(0)" 
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
        const spans = document.querySelectorAll('nav button div span')
        const ul = document.querySelectorAll('nav ul')
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if (window.scrollY + 20 >= sectionTop) {
                current = section.getAttribute('class')
            }
            if (section.classList.contains(current)) {
                navLi.forEach(li => {
                    li.style.color = "white"
                    spans.forEach(span => span.style.backgroundColor = "white")
                    if (current === "PROJECT" || current === "CONTACT") {
                        li.style.color = "black"
                        spans.forEach(span => span.style.backgroundColor = "black")
                    }
                })
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

    const styleLogo = {
        position: "relative",
        borderBottom: "2px solid",
        borderRadius: "50%",
        fontFamily: `Ephesis`,
        fontSize: "30px",
        color: "white",
    }
//     const fadeInTop = keyframes`
//         0% {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//     `
//     const fadeOutBottom = keyframes`
//         from {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           to {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//     `

//     const AnimatedLiWork = styled.li`
//     animation: ${fadeInTop} 150ms linear
// `;

// const AnimatedLiAbout = styled.li`
// animation: ${fadeInTop} 250ms linear
// ` ;
// const AnimatedLiContact = styled.li`
// animation: ${fadeInTop} 350ms linear;
// `;
    // const desktopMenu = (

    //     <ul style={{ display: "flex", position:"absolute", top:"0", right:"0", zIndex:"69" }} >
    //         <AnimatedLiWork style={{...styleList}} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</AnimatedLiWork>
    //         <AnimatedLiAbout style={styleList} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</AnimatedLiAbout>
    //         <AnimatedLiContact style={styleList} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</AnimatedLiContact>
    //     </ul>
    // )

      const desktopMenu = (

        <ul style={{ display: "flex", position:"absolute", top:"0", right:"0", zIndex:"69" }} >
            <li style={{...styleList, transition: "all 100ms linear"}} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={{...styleList, transition: "all 200ms linear"}} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
            <li style={{...styleList, transition: "all 300ms linear"}} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
        </ul>
    )


//     const AnimatedLiWork2 = styled.li`
//     animation: ${fadeOutBottom} 350ms linear
// `;

// const AnimatedLiAbout2 = styled.li`
// animation: ${fadeOutBottom} 250ms linear
// ` ;
// const AnimatedLiContact2 = styled.li`
// animation: ${fadeOutBottom} 150ms linear;
// `;
//     const desktopMenuReverse = (

//         <ul style={{ display: "flex", position:"absolute", top:"0", right:"0"   }} >
//             <AnimatedLiWork2 style={{...styleList, opacity: "0",  transform: "translateY(-30px)"}} >Work</AnimatedLiWork2>
//             <AnimatedLiAbout2 style={{...styleList, opacity: "0",  transform: "translateY(-30px)"}} >About</AnimatedLiAbout2>
//             <AnimatedLiContact2 style={{...styleList, opacity: "0",  transform: "translateY(-30px)"}} >Contact</AnimatedLiContact2>
//         </ul>
//     )

//     const fadeOutRight =
//     keyframes`
//     0% {
//         opacity: 1;
//             transform: translateX(0);
//       }
//       100% {
//         opacity: 0;
//         transform: translateX(30px);
//       }
// `

//     const AnimatedHamburger = styled.div`
//     animation: ${fadeOutRight} 100ms linear
// `;


//     const dropdownMenuReverse = (
//         <AnimatedHamburger style={{opacity: "0", transform: "translateX(30px)"}} >
//         <span style={barStyle}></span>
//         <span style={barStyle}></span>
//     </AnimatedHamburger>

    // )
   


    return (
        <div>

            <nav style={{
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 20px",
                zIndex: "2",
            }}
            >
                <div >
                    <li style={{ ...styleList, ...styleLogo }} className={'DASHBOARD'} onClick={() => scrollToSection(dashboard)}>MS<span style={{ color: "orange" }}>.</span></li>
                </div>
                <div>
                {/* {hamburger ?  dropdownMenuReverse :  <DropdownMenu /> }
                {hamburger ? desktopMenu : desktopMenuReverse} */}
                {/* {desktopMenu} */}
                <DropdownMenu  about={about}project={project} skills={skills} dashboard={dashboard} scrollToSection={scrollToSection} />
                </div>
                
            </nav>
            <Dashboard dashboard={dashboard} />
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}

