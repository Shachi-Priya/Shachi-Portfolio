import React from 'react';
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import CV from "./cv.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition={duration:1, type:"spring"};

  return (
    <div className="services" id="services">
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?"white":""}}>
                My Awesome
            </span>
            <span>
                Services
            </span>
            <span>
                As a Full Stack Developer,
                <br/>
                I can provide You a Customise Websites of your Choice.
            </span>
            <a href={CV} download>
                <button className="button s-button">Download CV</button>
            </a>
            <blur className="blur s-blur1" style={{background:"#ABF1FF94"}}></blur>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div
            initial={{top:"1rem", left: "30rem" }}
            whileInView={{ left: "26rem" }}
            transition={transition}
            >
                <Card
                emoji={Heartemoji}
                heading={"FrontEnd"}
                detail={"HTML, CSS, Javascript, Reactjs, Nextjs, MaterialUI, TailwindCSS"}
                />
            </motion.div>
            <motion.div 
            initial={{ top: "11rem", left: "1rem" }}
            whileInView={{ left: "4rem" }}
            transition={transition}
            // style={{top:"11rem", left:"4rem"}}
            >
                <Card
                emoji={Glasses}
                heading={"BackEnd"}
                detail={"Nodejs, Expressjs, REST, MangoDB, Firebase"}
                />
            </motion.div>
            <motion.div 
            initial={{ top: "22rem", left: "28rem" }}
            whileInView={{ left: "23rem" }}
            transition={transition}
            // style={{top:"22rem", left:"23rem"}}
            >
                <Card
                emoji={Humble}
                heading={"Coding"}
                detail={"Java, Javascript, Data Structures, Algorithm"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div> 
    </div>
  )
}

export default Services