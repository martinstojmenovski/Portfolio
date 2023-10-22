import sky from '../Components/images/sky.jpg'
import { useMediaQuery } from 'react-responsive'
import TheCircle from "./TheCircle";
import "./theCircle.css"
import Arrows from './Arrows';
import "./dashboard.css"

export default function Dashboard({ project, dashboard, scrollToSection, sectionOpacity }) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' })

    const backgroundMobile = {
        height: "100vh",
        width: "100vw",
        background: `linear-gradient(rgba(29,34,40, 0.6), rgba(29,34,40, 0.6)), url(${sky})`,
        opacity: sectionOpacity - 5.2,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "fixed",
        backgroundPosition: "center",
    }
   

    return (
        <section
            style={{
                position: "relative",
                height: "100dvh",
                overflow: "visible",
                //  maxWidth: isDesktopOrLaptop ? "1400px" : "90%",
                margin:"auto",
                // display:"flex",

            }}
            ref={dashboard} id='DASHBOARD' className='DASHBOARD'>

            <TheCircle />
            <div style={{...backgroundMobile, }}></div>


            <div
                style={{
                    margin: "auto",
                    position: "relative",
                    top: "45%",
                    transform: "translatey(-50%)",
                    maxWidth: isDesktopOrLaptop ? "70%" : "90%",
                    
                    overflow: "visible",  
                }}>
              
                <div className='main-message'
                    style={{ 
                        fontWeight: "bold",
                        scale: "1 2.3",
                        lineHeight: "0.8",
                        overflow: "visible", 
                        marginLeft:"25px"

                    }}  >
                          <span className='hi'
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        overflow: "visible",
                        scale: "1 1.5",
                        marginLeft:"-25px"
                    }} > Hi,</span><br></br>
                    <span style={{ overflow: "visible" }} className='I'>I &nbsp;</span>
                    <span style={{ overflow: "visible" }} className='create' >create&nbsp;  </span>
                    <span style={{ overflow: "visible" }} className='unique'>unique&nbsp; </span>
                    <span style={{ overflow: "visible" }} className='digital'>digital&nbsp; </span>
                    <span style={{ overflow: "visible" }} className='experiences'>experiences. </span>
                             
                  
                </div>
            </div>
            <Arrows project={project} scrollToSection={scrollToSection} />
        </section>
    )
}