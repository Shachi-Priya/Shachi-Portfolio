import React from 'react'
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesemoji.png";
import me2 from "../../img/me2.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition={duration:2, type:"spring"};
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?"white":""}}>
                    Hy! I Am 
                </span>
                <span>
                    Shachi
                </span>
                <span>
                    Enthusiastic Web Developer, eager to contribute to team success, attention to detail and excellent organization skills. Clear understanding in Full Stack Development, motivated to learn, grow and excel in IT industry.
                </span>
            </div>
            <button className="button i-button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href="https://github.com/Shachi-Priya">
                    <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/shachi-priya-87136018a/">
                    <img src={LinkedIn} alt="" />
                </a>
                <a href="https://www.instagram.com/shachi.tiwary/">
                    <img src={Instagram} alt="" />
                </a>     
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={me2} alt="" />
            <motion.img 
            initial={{ left: "-40%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            className="floating-div"
            src={Glassesemoji} alt=""
            />
            <motion.div 
            initial={{ top: "4%", left: "86%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
            >
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{ left: "5rem", top: "19rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
            >
                <FloatingDiv image={Thumbup} txt1='Always' txt2='a Learner'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:"#C1F5FF", top:"17rem", left:"-9rem", height:"11rem", width:"21rem"}}></div>
        </div>
    </div>
  )
}

export default Intro