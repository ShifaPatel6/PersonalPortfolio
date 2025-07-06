import "../Css/Homestyle.css";
import "../Css/AboutMe.css";
import Header from "./Header";

function AboutMe() {
  return (
    <>
      {/* <div className="main-container"> */}
      <div className="bod homebody">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/stars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Header />
        <div className="SkillHeading">About me</div>
        <div class="container background">
          <div class="maincontainer">
            <div class="section">
              <div className="text-center">
                <img src="/assets/About.png" alt="" width={120} height={120} />
              </div>
              <h2 class="Text mt-3">Education</h2>
              <div class="individualEdu d-flex align-items-center">
                <img src="/assets/school.png" alt="" width={40} height={40} />
                <div className="ms-4">
                  <div class="Text1 ">Foundational Education</div>
                  <div className=" year">2018</div>
                </div>
              </div>
              <div class="individualEdu d-flex align-items-center">
                <img
                  src="/assets/certificate.png"
                  alt=""
                  width={40}
                  height={40}
                />
                <div className="ms-4">
                  <div class="Text1 ">Diploma - Computer Engineering</div>
                  <div className=" year">2018-2021</div>
                </div>
              </div>
              <div class="individualEdu d-flex align-items-center">
                <img src="/assets/learning.png" alt="" width={40} height={40} />
                <div className="ms-4">
                  <div class="Text1 ">Bachelors - Computer Engineering</div>
                  <div className=" year">2021-2024</div>
                </div>
              </div>
            </div>

            <div class="section">
              <div className="text-center">
                <img
                  src="/assets/workinggirl.png"
                  alt=""
                  width={125}
                  height={125}
                />
              </div>
              <h2 class="Text mt-3">Experience</h2>
              <div class="individualEdu d-flex align-items-center">
                <img src="/assets/job.png" alt="" width={40} height={40} />
                <div className="ms-4">
                  <div class="Text1 d-flex">
                    DBI Pvt.Ltd - Website Developer (Internship)
                    <div className="ms-5 exp">1 Month</div>
                  </div>
                  <div className=" year">Jan (2024) - Feb (2024)</div>
                </div>
              </div>
              <div class="individualEdu d-flex align-items-center">
                <img src="/assets/job.png" alt="" width={40} height={40} />
                <div className="ms-4">
                  <div class="Text1 d-flex">
                    Zyntric Tech - Frontend Developer (Fulltime)
                    <div className="ms-5 exp">1 year</div>
                  </div>
                  <div className=" year">Feb (2024) - Feb (2025)</div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
