
import About from './About'
import Project from './Project'
import Dashboard from './Dashboard'
import DropdownMenu from './DropdownMenu'
import Contact from './Contact'
import "./navigationAnimation.css"




import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function Navigation() {
    //useRef declaration for page navigation
    const about = useRef(null)
    const project = useRef(null)
    const contact = useRef(null)
    const dashboard = useRef(null)

    //Page navigation function - overflow hidden to stop page from scrolling
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const [liOpacity, setLiOpacity] = useState("1")
    const [liTranslateY, setLiTranslateY] = useState("translateY(0)")
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })
    

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
        }
        else {
            setLiTranslateY("translateY(0)")
            setLiOpacity("1")
        }
    }
    window.addEventListener('scroll', handleScroll)



    const styleList = {
        fontSize: "18px",
        listStyle: "none",
        cursor: "pointer",
        padding: "10px",
        transition: "transform 200ms linear, opacity 200ms linear",
        opacity: liOpacity,
        transform: liTranslateY,
        position: "relative",
        top: "0"
    }

    const styleLogo = {
        position: "relative",
        listStyle: "none",
        cursor: "pointer",
        padding: "10px",
        fontFamily: `Ephesis`,
        fontSize: "25px",
    }

    const desktopMenu = (
        <ul style={{ display: "flex" }} >
            <li style={{ ...styleList, }} className={'PROJECTn'} onClick={() => scrollToSection(project)} >Work</li>
            <li style={{ ...styleList, transitionDelay: "200ms", }} className={'ABOUTn'} onClick={() => scrollToSection(about)} >About</li>
            <li style={{ ...styleList, transitionDelay: "350ms" }} className={'CONTACTn'} onClick={() => scrollToSection(contact)} >Contact</li>
        </ul>
    )
    const [sectionOpacity, setSectionOpacity] = useState(0)
    window.addEventListener('scroll', function () {
        setSectionOpacity( this.window.pageYOffset / 550 + "")
    })
    console.log(6.8 - sectionOpacity)

    return (
        <div>

            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "55px",
                left: "5%",
                height: "2px",
                background: "#E1E2E2",
                opacity: "0.4",
                zIndex: "20",
                transition: "width 30ms linear",
                width: `${progressBar}%`,
            }}></div>}

            {!isDesktopOrLaptop && <div style={{
                position: "fixed", top: "56px",
                left: "5%",
                height: "1px",
                background: "#E1E2E2",
                opacity: "0.1",
                zIndex: "5",
                width: `90%`,
            }}></div>}

            <nav style={{
                position: "fixed",
                overflow: "visible",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                zIndex: "2",
                transition: "background 100ms linear",
                backgroundColor: isDesktopOrLaptop ? "transparent " : `rgba(29,34,40, ${7.2 -sectionOpacity})`,
            }}
            >


                <div style={{ display: "flex" }} >
                    <li style={{ ...styleLogo, }}
                        className={'DASHBOARD'}
                        onClick={() => scrollToSection(dashboard)}
                    >MS&nbsp;
                        <span style={{
                            backgroundColor: "#FB8122",
                            height: "3.4px", width: "3.4px",
                            borderRadius: "50%",
                            display: "inline-block"
                        }}>  </span></li>
                </div>
                <div>
                    {isDesktopOrLaptop && desktopMenu}

                    <DropdownMenu about={about} project={project} skills={contact} dashboard={dashboard} scrollToSection={scrollToSection} />

                </div>
            </nav>
            <Dashboard dashboard={dashboard} scrollToSection={scrollToSection} project={project} sectionOpacity={sectionOpacity} />
            <Project project={project} />
            <About about={about} />
            <Contact contact={contact} />
        </div>

    )
}




