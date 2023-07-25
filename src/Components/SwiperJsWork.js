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
function SwiperJsWork() {

    return (

        <div className='project-swiper'>
            <div className='body'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide style={{border: "2px solid gray" , display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"white"}} key={index}>
                  
                        <h5>{slide.name}</h5>
                    <p style={{textAlign:"center", padding:"30px 10px"}} >{slide.content}</p>
                      <a  href={slide.link} target="_blank"><span>MORE</span></a>
                      
                      </SwiperSlide>
                ))}
                {/* <SwiperSlide >
                    <div className="container1">

                        <div className="project1">
                        <h5>FRIENDS</h5>
                        <p>User authentication application built in React and Django
                            allows you to create an account and login with user verification.</p>
                        <a href="https://martinstojmenovski.github.io/Friends/" target="_blank"><span>MORE</span></a>
                    </div>

                    </div>
                </SwiperSlide> */}


            </Swiper>
            </div>
        </div>

    );
}

export default SwiperJsWork;
