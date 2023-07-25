
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
    const [blurNav, setBlurNav] = useState("blur(0)")
    const [blackBackground, setblackBackground] = useState("0")
    const [borderBottom, setBorderBottom] = useState("0")
    const [liOpacity, setLiOpacity] = useState("1")
    const [liTranslateY, setLiTranslateY] = useState("translateY(0)")
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })
    // ProgresBar function
    const [progressBar, setProgresBar] = useState(0)
    const scrollProgress = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 90;
        // console.log(scrolled)
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

        } else if (!isDesktopOrLaptop && window.scrollY) {
            setBlurNav("blur(4px)")
            setblackBackground("4")
            setBorderBottom("3")
        }
        else {
            setBlurNav("blur(0)")
            setblackBackground("0")
            setLiTranslateY("translateY(0)")
            setLiOpacity("1")
            setBorderBottom("0")
        }

    }
    window.addEventListener('scroll', handleScroll)



    const styleList = {
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        padding: "10px",
        transition: "transform 200ms linear, opacity 200ms linear",
        opacity: liOpacity,
        transform: liTranslateY,
    }

    const styleLogo = {
        position: "relative",
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        padding: "10px",
        borderRadius: "50%",
        fontFamily: `Ephesis`,
        fontSize: "30px",
    }

    const desktopMenu = (
        <ul style={{ display: "flex" }} >
            <li style={{ ...styleList, }} className={'PROJECT'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={{ ...styleList, transitionDelay: "200ms", }} className={'ABOUT'} onClick={() => scrollToSection(about)} >About</li>
            <li style={{ ...styleList, transitionDelay: "350ms" }} className={'CONTACT'} onClick={() => scrollToSection(skills)} >Contact</li>
        </ul>
    )

    return (
        <div>
            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "65px",
                left: "5%",
                height: "2px",
                background: "#ecebeb",
                zIndex: 1,
                transition: "width 30ms linear", width: `${progressBar}%`,
            }}></div>}

            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "65px",
                left: "5%",
                height: "1px",
                background: " rgba(239, 239, 240, 0.3)",
                zIndex: 1,
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
                transition: "all 400ms linear",
                backdropFilter: isDesktopOrLaptop ? "blur(0)" :  `${blurNav}`,
                WebkitBackdropFilter:  isDesktopOrLaptop ? "blur(0)" :  `${blurNav}`,




                // background: `rgba(0, 0, 0, 0.${blackBackground})`,
                // background: `rgba(0, 0, 0, 0.${blackBackground})`,
                // background:"rgba(31, 31, 30, 1)",
                // background:`rgba(255, 255, 255, 0.${borderBottom})`,
                // borderBottom:`1px solid  rgba(239, 239, 240, 0.3)`,

            }}
            >


                <div style={{ display: "flex" }} >
                    <li style={{ ...styleLogo, }}
                        className={'DASHBOARD'}
                        onClick={() => scrollToSection(dashboard)}
                    >MS&nbsp;
                        <span style={{
                            backgroundColor: "orange",
                            height: "5px", width: "5px",
                            borderRadius: "50%",
                            display: "inline-block"
                        }}>  </span></li>
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




