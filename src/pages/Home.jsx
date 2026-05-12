import "../Css/Homestyle.css";

import Header from "./Header";

function Home({ setactive }) {
  // useEffect(() => {
  //   const skills = [
  //     "Frontend Developer",
  //     "React.js",
  //     "Next.js",
  //     "Redux",
  //     "RTK",
  //     "Material UI",
  //     "Tailwind CSS",
  //     "Bootstrap",
  //     " API integration",
  //     "SQL",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //   ];
  //   let paragraph = document.querySelector(".description");

  //   skills.forEach((skill) => {
  //     paragraph.innerHTML = paragraph.innerHTML.replace(
  //       new RegExp(skill, "g"),
  //       `<span class="highlight">${skill}</span>`
  //     );
  //   });
  // });

  return (
    <>
      {/* <div className="main-container"> */}
      <div className="bod homebody">
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/assets/stars.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <h1 className=" heading ">Welcome</h1> */}
        <Header showbutton={false} />
        {/* <div className="container-fluid d-flex justify-content-center align-items-center text-center"> */}
        <div>
          <div className="d-flex justify-content-center h-100 ">
            <div class="container shadow-lg back ">
              <div class="text-center rounded-3 mt-5 mb-5">
                <img src="/assets/homeimg.png" alt="" className="photo" />
                <h1 class="title animate__animated animate__bounceInDown">
                  Hey! I'm <span class="gradient-text">SHIFA</span>
                </h1>
                <p className="col-lg-8 mx-auto  text-muted para">
                  Frontend Developer | MERN Stack Enthusiast Passionate about
                  building modern, responsive, and user-friendly web
                  applications. Skilled in React, Tailwind CSS, and JavaScript,
                  I bring designs to life with seamless UI/UX. Always learning,
                  always creating!
                </p>
                <div class="d-inline-flex gap-2 mb-5">
                  <button
                    class="d-inline-flex align-items-center btn  btn-lg px-4 rounded-pill"
                    type="button"
                    style={{ backgroundColor: "#13073B", color: "white" }}
                  >
                    <div className="text" onClick={() => setactive("Contact")}>
                      Hire me
                    </div>
                  </button>

                  <button
                    class="d-inline-flex align-items-center btn  btn-lg px-4 rounded-pill"
                    type="button"
                    style={{ backgroundColor: "#13073B", color: "white" }}
                  >
                    <a
                      href="/assets/Shifa_Patel_Resume_D29"
                      download="Shifa_Patel_Resume"
                      className="text text-decoration-none text-white"
                    >
                      Download Resume
                    </a>{" "}
                  </button>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Home;
