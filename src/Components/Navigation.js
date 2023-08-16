
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Dashboard from './Dashboard'
import DropdownMenu from './DropdownMenu'



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
    const [blurNav, setBlurNav] = useState("transparent")
    const [liOpacity, setLiOpacity] = useState("1")
    const [liTranslateY, setLiTranslateY] = useState("translateY(0)")
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })
    
    // ProgresBar function
    const [progressBar, setProgresBar] = useState(0)
    const scrollProgress = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 90;
      
        setProgresBar(scrolled)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollProgress)

        return () => window.removeEventListener('scroll', scrollProgress)
    }, [])



    // black background navigation menu when scroll
    const handleScroll = () => {
        if (window.scrollY && isDesktopOrLaptop) {
            setLiTranslateY("translateY(-40px)")
            setLiOpacity("0")
        } else if (!isDesktopOrLaptop && window.scrollY  > 540) {
            setBlurNav("#1e1e1e")
        }
        else {
            setBlurNav("transparent")
            setLiTranslateY("translateY(0)")
            setLiOpacity("1")
        }
    }
    window.addEventListener('scroll', handleScroll)



    const styleList = {
        fontSize:"18px",
        listStyle: "none",
        cursor: "pointer",
   
        padding: "10px",
        transition: "transform 200ms linear, opacity 200ms linear",
        opacity: liOpacity,
        transform: liTranslateY,
        position:"relative",
        top:"0"
    }

    const styleLogo = {
        position: "relative",
        listStyle: "none",
        cursor: "pointer",
    
        padding: "10px",
        borderRadius: "50%",
        fontFamily: `Ephesis`,
        fontSize: "25px",
        transition: "color 300ms linear",
  
 
        
    }

    const desktopMenu = (
        <ul style={{ display: "flex" }} >
            <li style={{ ...styleList, }} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={{ ...styleList, transitionDelay: "200ms", }} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
            <li style={{ ...styleList, transitionDelay: "350ms" }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
        </ul>
    )
    const [sectionOpacity, setSectionOpacity] = useState(0)
    window.addEventListener('scroll', function () {

        setSectionOpacity(-4+ this.window.pageYOffset / 550 + "")
        
       
    })
    console.log(sectionOpacity) 

    return (
        <div>
            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "55px",
                left: "5%",
                height: "2px",
                background: "#bbbbbb4",
                zIndex: 22,
                transition: "width 30ms linear", width: `${progressBar}%`,
            }}></div>}

            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "56px",
                left: "5%",
                height: "1px",
                background: " rgba(239, 239, 240, 0.2)",
                zIndex: 22,
                width: `90%`,
            }}></div>}



            <nav style={{
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                zIndex: "2",
                transition: "background 100ms linear",
                // background: isDesktopOrLaptop ? "transparent" :  `${blurNav}`,
                // opacity:sectionOpacity,
                // backgroundColor:`rgba(30, 30, 30, ${sectionOpacity} )`,
                backgroundColor:isDesktopOrLaptop? "transparent ":`rgba(37, 37, 37, ${1.5 - sectionOpacity})`,
             
             
            }}
            >


                <div style={{ display: "flex" }} >
                    <li style={{ ...styleLogo, }}
                        className={'DASHBOARD'}
                        onClick={() => scrollToSection(dashboard)}
                    >MS&nbsp;
                        <span style={{
                            backgroundColor: "orange",
                            height: "3.4px", width: "3.4px",
                            borderRadius: "50%",
                            display: "inline-block"
                        }}>  </span></li>
                </div>
                <div>
                    {isDesktopOrLaptop && desktopMenu}

                    <DropdownMenu about={about} project={project} skills={skills} dashboard={dashboard} scrollToSection={scrollToSection} />

                </div>
            </nav>


            <Dashboard dashboard={dashboard} scrollToSection={scrollToSection} project={project} sectionOpacity={sectionOpacity} />
      
            <Project project={project} />
            <About about={about} />
            <Skills skills={skills} />
        </div>

    )
}




