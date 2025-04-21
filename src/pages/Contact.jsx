import React from "react";
import "../Css/Contact.css";
function Contact() {
  return (
    <>
      <div className="main">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/stars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container d-flex justify-content-center">
          <div className="SkillHeading ">Contact me</div>
        </div>
        <div className=" d-flex align-items-center flex-wrap  mt-4 overflow-hidden maindiv">
          <div>
            <img
              src="/assets/contact1.png"
              alt=""
              width={400}
              height={400}
              className="contactimg "
            />
          </div>
          <div className="contactsection  d-flex justify-content-center align-items-center ">
            <div className="contactform  align-items-center justify-content-center ">
              <div>
                <label
                  for="exampleFormControlInput1"
                  class="form-label labelStyle"
                >
                  Name
                </label>
                <input
                  type="text"
                  class="form-control textbox"
                  id="exampleFormControlInput1"
                />
                <label
                  for="exampleFormControlInput1"
                  class="form-label labelStyle"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="form-control textbox"
                  id="exampleFormControlInput1"
                />
                <label
                  for="exampleFormControlInput1"
                  class="form-label labelStyle"
                >
                  Contact no
                </label>
                <input
                  type="number"
                  class="form-control textbox"
                  id="exampleFormControlInput1"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label labelStyle"
                >
                  Message
                </label>
                <textarea
                  class="form-control textbox"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <button
                  className="d-inline-flex align-items-center btn  btn-lg px-4 rounded-pill"
                  type="button"
                  style={{ backgroundColor: "#13073B", color: "white" }}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="Social ">
              <div className=" SocialIcons ">
                <a
                  href="https://www.linkedin.com/in/shifa-patel-7065a2262/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/linkedin-logo_4096186.png"
                    alt=""
                    width={40}
                    heigh={40}
                  />
                </a>
                <a
                  href="mailto:shifapaaptel06@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/gmail2.png" alt="" width={40} heigh={40} />
                </a>
                <a
                  href="tel:8390160153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/app_16075949.png"
                    alt=""
                    width={40}
                    heigh={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
