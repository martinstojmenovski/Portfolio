
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import TheCircle from "./TheCircle";
import "./theCircle.css"

import "./dashboard.css"



export default function Dashboard({ project, dashboard, scrollToSection, sectionOpacity }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })


    const backgroundMobile = {
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.4)), url(${BackgroundMobile})`,
        opacity: sectionOpacity,
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",

    }
    const styleArrow = {
        display: "block",
        width: "60px",
        height: "4px",
        backgroundColor: "#FB8122",
        position: "absolute",
        right: "50%",
    }
    

    return (

        <section
            style={{
                position: "relative",
                height: "100dvh",
                overflow: "hidden"
            }}
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>

            <TheCircle />
            <div style={{
                ...backgroundMobile,
            }}>

            </div>

            <div
                style={{
                    padding: "10px",
                    margin: "auto",
                    position: "relative",
                    top: "48%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: isDesktopOrLaptop ? "90%" : "98%",
                    // fontWeight: "400"
                }}

            >
              
                <div className='hi' style={{fontSize:"2.5rem" }} > Hi,</div>
                <div className='main-message'  style={{ marginLeft:"25px" }}  >
                    <div className='I'>I &nbsp;</div>
                    <div className='create' >create&nbsp;  </div>
                    <div className='unique'>unique&nbsp; </div> 
                    <div className='digital'>digital </div> 
                    <div className='experiences'>experiences. </div>
                </div>
            </div>
            <div style={{
                cursor: "pointer",
                position: "absolute",
                top: "75dvh",
                padding: "45px",
                transform: " translatex(50%)",
                right: "50%",
                overflow: "hidden"

            }} onClick={() => scrollToSection(project)}>
                <span style={{
                    ...styleArrow, transform: " translatex(50%)  translatex(-20px) rotate(-45deg)"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)"
                }}> </span>
                <span style={{
                    ...styleArrow,
                    transform: " translatex(50%) translatex(-20px) rotate(-45deg)",
                    bottom: "20px"
                }}></span>
                <span style={{
                    display: "block",
                    ...styleArrow,
                    transform: " translatex(50%)  translatex(20px) rotate(45deg)",
                    bottom: "20px"
                }}> </span>

            </div>

        </section>



    )
}