import { GiCancel } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
// import { useState } from "react";

const Navbar = ({ active, setactive, isSidebarOpen, setIsSidebarOpen }) => {
  // const [open, setOpen] = useState(false);
  const handleopennav = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (tabName) => {
    setactive(tabName);
    setIsSidebarOpen(false); // Close sidebar when a tab is clicked
  };
  return (
    <>
      <div
        className={`d-flex flex-column  p-3  sideStyle 
         ${isSidebarOpen ? "open" : "close"}
        }`}
      >
        {isSidebarOpen && (
          <div className="sidebar-header ">
            <span className="fs ">Shifa's Portfolio</span>

            <GiCancel className="cancelicon" onClick={handleopennav} />
          </div>
        )}
        {!isSidebarOpen && (
          <div className="Menu cursor-pointer">
            <FiMenu onClick={handleopennav} />
          </div>
        )}
        {isSidebarOpen && (
          <>
            <hr style={{ color: "white", opacity: "4.5", marginTop: "20px" }} />

            <ul className="nav flex-column mb-auto  ">
              <li
                className=" nav-link  hovnav "
                onClick={() => handleClick("Home")}
              >
                <a
                  href="#"
                  className={` text-white navstyle  ${
                    active === "Home" && "active"
                  }`}
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li
                className="nav-link hovnav  "
                onClick={() => handleClick("Skills")}
              >
                <a
                  href="#"
                  className={` text-white  navstyle ${
                    active === "Skills" && "active"
                  }`}
                >
                  Skills
                </a>
              </li>
              <li
                className="nav-link hovnav "
                onClick={() => handleClick("Project")}
              >
                <a
                  href="#"
                  className={` text-white  navstyle ${
                    active === "Project" && "active"
                  }`}
                >
                  Projects{" "}
                </a>
              </li>
              <li
                className="nav-link  hovnav "
                onClick={() => handleClick("About")}
              >
                <a
                  href="#"
                  className={` text-white  navstyle ${
                    active === "About" && "active"
                  }`}
                >
                  About Me
                </a>
              </li>
              <li
                className="nav-link  hovnav "
                onClick={() => handleClick("Contact")}
              >
                <a
                  href="#"
                  className={` text-white  navstyle ${
                    active === "Contact" && "active"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="blob clipped-blob2 "
              >
                <path
                  fill="#F2F4F8"
                  d="M43.3,-77.1C54.1,-68.8,59.4,-53.1,64.6,-39C69.7,-24.9,74.6,-12.5,76,0.8C77.4,14.1,75.3,28.2,68.3,39.1C61.4,50,49.6,57.7,37.4,65.1C25.2,72.5,12.6,79.6,1.1,77.7C-10.4,75.8,-20.8,64.9,-32.4,57.2C-44,49.4,-56.8,44.8,-63.2,35.8C-69.7,26.8,-69.8,13.4,-68.2,0.9C-66.7,-11.6,-63.5,-23.2,-58.4,-34.6C-53.3,-46,-46.4,-57.1,-36.3,-65.9C-26.3,-74.6,-13.1,-80.9,1.6,-83.6C16.3,-86.3,32.5,-85.4,43.3,-77.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="blob clipped-blob "
              >
                <path
                  fill="#F2F4F8"
                  d="M43.3,-77.1C54.1,-68.8,59.4,-53.1,64.6,-39C69.7,-24.9,74.6,-12.5,76,0.8C77.4,14.1,75.3,28.2,68.3,39.1C61.4,50,49.6,57.7,37.4,65.1C25.2,72.5,12.6,79.6,1.1,77.7C-10.4,75.8,-20.8,64.9,-32.4,57.2C-44,49.4,-56.8,44.8,-63.2,35.8C-69.7,26.8,-69.8,13.4,-68.2,0.9C-66.7,-11.6,-63.5,-23.2,-58.4,-34.6C-53.3,-46,-46.4,-57.1,-36.3,-65.9C-26.3,-74.6,-13.1,-80.9,1.6,-83.6C16.3,-86.3,32.5,-85.4,43.3,-77.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="blob "
              >
                <path
                  fill="#F2F4F8"
                  d="M43.3,-77.1C54.1,-68.8,59.4,-53.1,64.6,-39C69.7,-24.9,74.6,-12.5,76,0.8C77.4,14.1,75.3,28.2,68.3,39.1C61.4,50,49.6,57.7,37.4,65.1C25.2,72.5,12.6,79.6,1.1,77.7C-10.4,75.8,-20.8,64.9,-32.4,57.2C-44,49.4,-56.8,44.8,-63.2,35.8C-69.7,26.8,-69.8,13.4,-68.2,0.9C-66.7,-11.6,-63.5,-23.2,-58.4,-34.6C-53.3,-46,-46.4,-57.1,-36.3,-65.9C-26.3,-74.6,-13.1,-80.9,1.6,-83.6C16.3,-86.3,32.5,-85.4,43.3,-77.1Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="blob "
              >
                <path
                  fill="#F2F4F8"
                  d="M43.3,-77.1C54.1,-68.8,59.4,-53.1,64.6,-39C69.7,-24.9,74.6,-12.5,76,0.8C77.4,14.1,75.3,28.2,68.3,39.1C61.4,50,49.6,57.7,37.4,65.1C25.2,72.5,12.6,79.6,1.1,77.7C-10.4,75.8,-20.8,64.9,-32.4,57.2C-44,49.4,-56.8,44.8,-63.2,35.8C-69.7,26.8,-69.8,13.4,-68.2,0.9C-66.7,-11.6,-63.5,-23.2,-58.4,-34.6C-53.3,-46,-46.4,-57.1,-36.3,-65.9C-26.3,-74.6,-13.1,-80.9,1.6,-83.6C16.3,-86.3,32.5,-85.4,43.3,-77.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
