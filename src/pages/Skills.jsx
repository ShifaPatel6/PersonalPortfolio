import React from "react";
import "../Css/Skills.css";
import Header from "./Header";
import SkillsandTools from "./SkillsandTools";
import { useEffect, useRef } from "react";

function Skills() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // 0.5x speed (Slower)
    }
  }, []);
  return (
    <>
      <div className="main-Skill">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/stars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <div className="SkillHeading">Skills and Tools</div>
        <SkillsandTools />
      </div>
    </>
  );
}

export default Skills;
