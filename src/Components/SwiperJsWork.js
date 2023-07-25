import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

// import "./project.css"
import slides from "./projectContent"


console.log(document.getElementsByClassName("swiper-pagination-bullet-active-main"))
// .style.backgroundColor = "orange"
function SwiperJsWork() {

    return (

        <div style={{height: "85vh"}} >
            <div style={{position: "relative", height: "100%"}}>
            <Swiper
                   pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide style={{
                        border: "4px solid rgb(234, 234, 234)" ,
                        color: "#6a6a6a",
                         display:"flex",
                          flexDirection:"column",
                          alignItems:"center",
                          justifyContent:"space-around"
                          }} key={index}>
                  
                        <h5>{slide.name}</h5>
                    <p style={{textAlign:"center", padding:"0 10px"}} >{slide.content}</p>
                      <a style={{paddingBottom:"10px"}} href={slide.link} target="_blank"><span>MORE</span></a>
                      
                      </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>

    );
}

export default SwiperJsWork;
