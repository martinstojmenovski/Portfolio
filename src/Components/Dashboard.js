import sky from '../Components/images/sky.jpg'
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
                    top: "46%",
                    left: "47%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: isDesktopOrLaptop ? "90%" : "95%",
                    overflow: "visible"
                }}>
                <div className='hi'
                    style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        overflow: "visible",
                        scale: "1 1.5",
                        position: "relative",
                        top: "-16vh"
                    }} > Hi,</div>
                <div className='main-message'
                    style={{
                        marginLeft: "25px",
                        fontWeight: "bold",
                        scale: "1 2.3",
                        lineHeight: "0.8",
                        overflow: "visible"
                    }}  >

                    <div style={{ overflow: "visible" }} className='I'>I &nbsp;</div>
                    <div style={{ overflow: "visible" }} className='create' >create&nbsp;  </div>
                    <div style={{ overflow: "visible" }} className='unique'>unique&nbsp; </div>
                    <div style={{ overflow: "visible" }} className='digital'>digital&nbsp; </div>
                    <div style={{ overflow: "visible" }} className='experiences'>experiences. </div>
                </div>
            </div>
            <Arrows project={project} scrollToSection={scrollToSection} />
        </section>
    )
}