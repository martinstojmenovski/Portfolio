
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'


function DropdownMenu({ scrollToSection, about, skills, project, }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })

    const [navbarOpen, setNavbarOpen] = useState(false);







    const [hamburgerOpacity, setHamburgerOpacity] = useState("0")
    const [hamburgerTransform, setHamburgerTransform] = useState("translateX(60px)")
    const [hamburgerDelay, setHamburgerDelay] = useState("0")
    const handleScroll = () => {
        if (window.scrollY) {
            setNavbarOpen(false)
            setHamburgerOpacity("1")
            setHamburgerTransform("translatex(0)")
            setHamburgerDelay("500ms")
        } else {
            setHamburgerOpacity("0")
            setHamburgerTransform("translatex(60px)")
            setHamburgerDelay("100ms")
        }

    }
    window.addEventListener('scroll', handleScroll)

    const showUlStyle = {
        position: "absolute",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: "58px",
        left: "5%",
        height: navbarOpen ? "80vh" : "0px",
        overflow: navbarOpen ? "visible" : "hidden",
        width: "90%",
        backgroundColor: "#1D2228",
        transition: "height 200ms linear",
    }
    const styleList = {
        listStyle: "none",
        cursor: "pointer",
        color: "#ececec",
        fontWeight: "500",
        padding: "30px 10px 10px 10px",
        opacity: navbarOpen ? "1" : "0",
        transition: "opacity 100ms linear, transform 200ms linear",
        transitionDelay: "100ms",
        position: "relative",
        top: "0",
        margin:"0",
    }
    return (


        <div className='hamburgerButton'
            style={{
                overflowX: "visible",
                position: "absolute",
                top: "0", right: "0",
                opacity: isDesktopOrLaptop ? hamburgerOpacity : "1",
                transform: isDesktopOrLaptop ? hamburgerTransform : "translatex(0)",
                transition: "opacity 200ms linear, transform 200ms linear",
                width: "100%",
                transitionDelay: hamburgerDelay,
            }} >
            <button onClick={() =>  setNavbarOpen(prev => !prev) }>





                <div style={{
                    position: "absolute", top: "0", right: "10px", padding: "15px", background: "transparent",
                }}>
                    <span style={{ ...barStyle, transform: navbarOpen ? "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0)" }} ></span>
                    <span style={{ ...barStyle, transform: navbarOpen ? "translateY(-4px) rotate(-45deg)" : "translateY(0) rotate(0)" }} ></span>
                </div>
            </button>

            <ul style={{
                ...showUlStyle,

            }}>
                <li style={{ ...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)", }} className={'PROJECT'} onClick={() => { scrollToSection(project); setNavbarOpen((prev) => !prev) }} >Work</li>
                <li style={{ ...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)", }} className={'ABOUT'} onClick={() => { scrollToSection(about); setNavbarOpen((prev) => !prev) }} >About</li>
                <li style={{ ...styleList, transform: navbarOpen ? "translateY(0)" : "translateY(70px)", }} className={'CONTACT'} onClick={() => { scrollToSection(skills); setNavbarOpen((prev) => !prev) }} >Contact</li>
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
    backgroundColor: "#E1E2E2",
    transition: "transform 150ms ease-in-out,  background 300ms linear ",

}
export { barStyle, }

