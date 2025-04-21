import React from "react";
import "../Css/Skills.css";
function SkillsandTools() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-wrap Skills-container">
        <div className="Skills ">
          <h2 className="Skillstext">Frameworks and Liberaries</h2>
          <div className=" d-flex align-items-center flex-wrap justify-content-center ">
            <div className="d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/React.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="react">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Redux.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Redux">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="d-flex  align-items-center flex-wrap mt-4">
              <img
                src="/assets/Tailwind CSS.svg"
                alt=""
                width={50}
                height={50}
              />
              <div className="progress-bar ">
                <div className="Tailwindcss">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img
                src="/assets/Material UI.svg"
                alt=""
                width={50}
                height={50}
              />
              <div className="progress-bar ">
                <div className="Materialui">
                  <span>85%</span>
                </div>
              </div>{" "}
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/HTML5.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="HTML">
                  <span>90%</span>
                </div>
              </div>{" "}
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/CSS3.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Css">
                  <span>86%</span>
                </div>
              </div>{" "}
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Sass.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Sass">
                  <span>85%</span>
                </div>
              </div>{" "}
            </div>
          </div>

          <h2 className="Skillstext ">Languages</h2>
          <div className="d-flex flex-wrap justify-content-center">
            <div className=" d-flex  align-items-center flex-wrap">
              <img src="/assets/JavaScript.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Javascript">
                  <span>85%</span>
                </div>
              </div>{" "}
            </div>
            <div className=" d-flex  align-items-center flex-wrap">
              <img src="/assets/Python.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Python">
                  <span>80%</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <h2 className="Skillstext">Tools</h2>

          <div className="d-flex flex-wrap justify-content-center">
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Postman.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Postman">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Insomnia.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Insomnia">
                  <span>84%</span>
                </div>
              </div>
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/GitHub.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="GitHub">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Figma.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Figma">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className=" d-flex  align-items-center flex-wrap mt-4">
              <img src="/assets/Canva.svg" alt="" width={50} height={50} />
              <div className="progress-bar ">
                <div className="Canva">
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper"></div>
      </div>
    </>
  );
}

export default SkillsandTools;
