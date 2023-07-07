
import { transition } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'


function DropdownMenu({ scrollToSection, about, skills, project, openBar }) {
   
    const [navbarOpen, setNavbarOpen] = useState(false);

    const showListStyle = {
        position: "absolute",
        right: "0",
        // top: "70px",
        // backgroundColor: "rgba(0, 0, 0, 0.8)",
        // padding: " 20px",
        // boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.8)",
        transition: "opacity 150ms ease-in-out, transform 150ms ease-in-out"

    }
    const closeHamburger = () =>{
        if(window.scrollY > 50){
            setNavbarOpen(false)
        }
    }
window.addEventListener('scroll', closeHamburger)


    return (
        <div className='hamburgerButton' style={{ position: "absolute", top:"20px", right:"3%",  transform: "translatex(60px)", opacity: "0", transition: "opacity 200ms linear, transform 200ms linear",}} >
            <button  
                onClick={() =>  setNavbarOpen((prev) => !prev)}
            >
          
                <div >
                    <span style={{...barStyle, transform: navbarOpen ?  "translateY(4px) rotate(45deg)" : "translateY(0) rotate(0)"}} ></span>
                    <span style={{...barStyle, transform:  navbarOpen ?  "translateY(-4px) rotate(-45deg)" : "translateY(0) rotate(0)"}} ></span>
                </div>
            </button>
            <ul style={{ ...showListStyle, transform: navbarOpen ? "translateY(0)" : "translateX(300px)", opacity: navbarOpen ? "1" : "0" }} >
                <li style={styleList} className={'PROJECT'} onClick={() => { scrollToSection(project);  setNavbarOpen((prev) => !prev)}} >Work</li>
                <li style={styleList} className={'ABOUT'} onClick={() => { scrollToSection(about); setNavbarOpen((prev) => !prev) }} >About</li>
                <li style={styleList} className={'CONTACT'} onClick={() => { scrollToSection(skills); setNavbarOpen((prev) => !prev) }} >Contact</li>
            </ul>
        </div>

    );
}

export default DropdownMenu;
const styleList = {
    listStyle: "none",
    cursor: "pointer",
    color: "#ececec",
    fontWeight: "500",
    padding: "10px",
}
const barStyle = {
    display: "block",
    width: "35px",
    height: "3px",
    margin: "5px auto",
    backgroundColor: "#ececec",
    transition: "transform 150ms ease-in-out"
}
export { styleList, barStyle, }
