import React from "react";
import Header from "./Header";
import "../Css/Project.css";
import Projects from "./Projects";
function Project() {
  return (
    <>
      <div className="main-Skill ">
      <video autoPlay loop muted playsInline className="video-bg">
            <source src="/assets/stars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <Header />
        <div className="SkillHeading">Projects</div>
        <Projects></Projects>
      </div>
    </>
  );
}

export default Project;
