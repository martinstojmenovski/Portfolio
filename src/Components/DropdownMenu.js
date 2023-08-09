
import {  useState } from 'react'
import { useMediaQuery } from 'react-responsive'


function DropdownMenu({ scrollToSection, about, skills, project,  }) {

    const isDesktopOrLaptop = useMediaQuery({  query: '(min-width: 480px)' })

    const [navbarOpen, setNavbarOpen] = useState(false);

    const showListStyle = {
        position: "absolute",
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        top: "66px", 
        left: "5%",
        height: navbarOpen ? "80vh": "0px",
        width: "90%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        transition:"height 200ms linear",
        zIndex:"-1"

    }
    const styleList = {
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        fontWeight: "500",
        padding: "30px 10px 10px 10px",
        opacity: navbarOpen ? "1": "0",
        transition:"opacity 100ms linear, transform 200ms linear",
        transitionDelay:"100ms"
    

    }
    // Function to set a border to the selected page
    const spans = document.querySelectorAll('nav button div span')
    const makeBorderbox = () => {
        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('nav li')
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if (window.scrollY + 20 >= sectionTop) {
                current = section.getAttribute('class')
            }
            if (section.classList.contains(current)) {
                
                if (current === "PROJECT" || current === "CONTACT") {
                    document.getElementsByClassName('DASHBOARD')[0].style.color = "black"
                    document.querySelectorAll('nav li span')[0].style.backgroundColor = "black"
                    spans.forEach(span => span.style.backgroundColor = "black")
                       
                }else{
                    document.querySelectorAll('nav li span')[0].style.backgroundColor = "orange"
                    document.getElementsByClassName('DASHBOARD')[0].style.color = 'white'  
                    spans.forEach(span => span.style.backgroundColor = "orange")
                }
            }
        })
        // Make border box
        // navLi.forEach(li => {
        //     li.style.borderBottom = "2px solid transparent"
        //     if (li.classList.contains(current)) {
        //         li.style.borderBottom = "2px solid"
        //     }
        // })

    }
    window.addEventListener('scroll', makeBorderbox)







    const [ hamburgerOpacity, setHamburgerOpacity ] = useState(  "0"  )
    const [ hamburgerTransform, setHamburgerTransform ] = useState(  "translateX(60px)"  )
    const handleScroll = () => {
        if (window.scrollY) {
            setNavbarOpen(false)
            setHamburgerOpacity( "1" )
            setHamburgerTransform("translatex(0)")
            document.getElementsByClassName('hamburgerButton')[0].style.transitionDelay = "500ms"
        
        } else {

            setHamburgerOpacity( "0" )
            setHamburgerTransform("translatex(60px)")
            document.getElementsByClassName('hamburgerButton')[0].style.transitionDelay = "100ms"     
        }
        
}
window.addEventListener('scroll',  handleScroll,  makeBorderbox)

    return (
        <div className='hamburgerButton' style={{
            position: "absolute",
            top: "0", right: "0", 
            opacity:  isDesktopOrLaptop ? hamburgerOpacity :  "1",
            zIndex: "1",
            transform: isDesktopOrLaptop ? hamburgerTransform : "translatex(0)", 
            transition: "opacity 200ms linear, transform 200ms linear",
            width: "100%" ,
        }} >
            <button
                onClick={() => {
                    setNavbarOpen((prev) => !prev)
                    if(navbarOpen === false){
                        spans.forEach(span => span.style.backgroundColor = "orange")
                    }else{
                        if(document.getElementsByClassName('DASHBOARD')[0].style.color === "black"){
                            spans.forEach(span => span.style.backgroundColor = "black")
                        } 
                    }
                }}
            >
                
                  

               

                <div style={{
                    position: "absolute", top: "0", right: "10px", zIndex: "1", padding: "20px",
                }}>
                    <span style={{ ...barStyle,  transform: navbarOpen ? "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0)" }} ></span>
                    <span style={{ ...barStyle,  transform: navbarOpen ? "translateY(-4px) rotate(-45deg)" : "translateY(0) rotate(0)" }} ></span>
                </div>
            </button>
           
            <ul style={{
                ...showListStyle,
                //  opacity: navbarOpen ? "1" : "0",
                // transform: navbarOpen ? "translatey(100%)" : "translatey(0)",
            
            }}>
                <li style={{...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)",  }} className={'PROJECT'} onClick={() => { scrollToSection(project); setNavbarOpen((prev) => !prev) }} >Work</li>
                <li style={{...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)",  }} className={'ABOUT'} onClick={() => { scrollToSection(about); setNavbarOpen((prev) => !prev) }} >About</li>
                <li style={{...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)",  }} className={'CONTACT'} onClick={() => { scrollToSection(skills); setNavbarOpen((prev) => !prev) }} >Contact</li>
            </ul>
  
        </div>

    );
}

export default DropdownMenu;
const barStyle = {
    display: "block",
    width: "45px",
    height: "2.5px",
    margin: "7px auto",
    backgroundColor: "orange",
    transition: "transform 150ms ease-in-out"
}
export { barStyle, }

