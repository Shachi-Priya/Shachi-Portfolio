import React from 'react'
import "./Testimonial.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import profile1 from "../../img/profile1.jpeg";
import profile2 from "../../img/profile2.jpeg";
import profile3 from "../../img/profile3.jpeg";
import profile4 from "../../img/profile4.jpeg";
import { Pagination } from 'swiper';
import "swiper/css/pagination";

const Testimonial = () => {
    const clients = [
        {
            img: profile4,
            review:
            "Tran Dinh Thang: FantasTic work.. It will help lots of new cse/it student. Now days every cse/it students  should know about github basic. This video of your will help them a lot to make repository.",
        },
        {
            img: profile1,
            review:
            "Abdelrahman Gamal: Your explanation is great and easy, keep providing great content.",
        },
        {
            img: profile3,
            review:
            "Rimon Debnath: oh my god. I just recently got this problem.finding the solution and here i got it.. Thank you.",
        },
        {
            img: profile2,
            review:
            "Shreya Gupta: Thank u so much I am going to watch all ur videos on sorting for my class test😀",
        }
      ];
    return (
    <div className="t-wrapper" id="testimonial">
        <div className="t-heading">
            <span>Companies always get </span>
            <span>Great Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    </div>
  )
}

export default Testimonial