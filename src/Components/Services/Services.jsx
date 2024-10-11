import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
import Resume from './Resume.pdf';
const Services = () =>{
return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Technical</span>
        <span>Knowledge</span>
        <spane>
          A complete fresher with Hands-on experience in Web Development and a Competative Coder 
          <br />
          Recieved a contest rating of 1557 on Leetcode emphasizing prior Knowledge of Competative Coding
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <div style={{left: '28 rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={"Competavtive Coding"}
            detail={"Leetcode,HackerRank,Codechef"}
          />
        </div>
        {/* second card */}
        <div style={{top: '28 rem',left: "20rem"}}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        {/* 3rd */}
        {/* <div style={{top: '-25rem',left: "25rem"}}></div>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            } */}
            
          {/* /> */}
        
      </div>
    </div>
  );
};

export default Services;