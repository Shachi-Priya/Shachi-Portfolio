import React from 'react'
import "./Work.css";
import Youtube from "../../img/youtube.png";
import Younglabs from "../../img/younglabs.png";
import Unity from "../../img/unity.png";
import Leetcode from "../../img/leetcode.png";
import Gfg from "../../img/gfg.png";
import Stackoverflow from "../../img/stackoverflow.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work" id="work">
        {/* left side */}
        <div className="awesome">
            <span style={{color:darkMode?"white":""}}>
                Work in All these
            </span>
            <span>
                Skill Enhancement
            </span>
            <span>
                Working in these, which enhance my extra skills and thinking capability. 
                <br/>
                Eager to learn more and more and contribute.     
            </span> 
            <button className="button s-button">Hire me</button>
            <blur className="blur s-blur1" style={{background:"#ABF1FF94"}}></blur>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div 
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
            >
                <div className="w-secCircle">
                    <img src={Gfg} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Unity} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Youtube} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Stackoverflow} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Leetcode} alt="" />
                </div>
            </motion.div>
            {/* background circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work