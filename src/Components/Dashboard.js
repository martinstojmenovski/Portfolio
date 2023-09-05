
import BackgroundMobile from '../Components/images/pexels-burst-mobile.jpg'
import { useMediaQuery } from 'react-responsive'
import TheCircle from "./TheCircle";
import "./theCircle.css"
import Arrows from './Arrows';
import "./dashboard.css"



export default function Dashboard({ project, dashboard, scrollToSection, sectionOpacity }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 480px)' })


    const backgroundMobile = {
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(rgba((29,34,40) 0.7),
        rgba((29,34,40) 0.4)), url(${BackgroundMobile})`,
        opacity: sectionOpacity,
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",

    }

    

    return (

        <section
            style={{
                position: "relative",
                height: "100dvh",
                overflow: "hidden",
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
                <div className='main-message'  style={{ marginLeft:"25px", fontSize:isDesktopOrLaptop? "6.5vw" : "2.5rem",}}  >
                    <div className='I'>I &nbsp;</div>
                    <div className='create' >create&nbsp;  </div>
                    <div className='unique'>unique&nbsp; </div> 
                    <div className='digital'>digital&nbsp; </div> 
                    <div className='experiences'>experiences. </div>
                </div>
            </div>
          
            <Arrows project={project}  scrollToSection={scrollToSection} />
        </section>



    )
}