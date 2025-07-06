import React from "react";
import "../Css/Homestyle.css";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

function Header({ showbutton = true }) {
  return (
    <>
      {" "}
      <div className="header-container">
        <div className="icons">
          {showbutton && (
            <button className="resume">
              <a
                href="/assets/Patel Shifa Resume.pdf"
                download="Patel_Shifa_Resume.pdf"
                className="color"
              >
                Download Resume
              </a>
            </button>
          )}
          <a href="mailto:shifapaaptel06@gmail.com" className="iconcolor">
            <MdOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/shifa-patel-7065a2262/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconcolor"
          >
            <TbBrandLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
