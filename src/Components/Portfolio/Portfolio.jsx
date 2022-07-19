import React from 'react'
import "./Portfolio.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Proj1 from "../../img/proj1.png";
import Proj2 from "../../img/proj2.png";
import Proj3 from "../../img/proj3.png";
import Proj4 from "../../img/proj4.png";
import Proj5 from "../../img/proj5.png";
import Proj6 from "../../img/proj6.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{color:darkMode?"white":""}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
            spaceBetween={30}
            slidesPerView={3.5}
            grabCursor={true}
            className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={Proj1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Proj6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Proj5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Proj2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Proj3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Proj4} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio