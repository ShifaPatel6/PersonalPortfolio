import "./Css/Navbarstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import WelcomeModal from "./components/WelcomeModal";
import Footer from "./components/Footer";
function App() {
  const [active, setactive] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <WelcomeModal />
      <div style={{ position: "relative" }}>
        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              pointerEvents: "auto",
            }}
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <Navbar
          active={active}
          setactive={setactive}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div
          style={{
            filter: isSidebarOpen ? "blur(2px)" : "none",
            transition: "filter 0.3s ease",
          }}
        >
          {active === "Home" && (
            <div>
              <Home setactive={setactive} />
            </div>
          )}
          {active === "Skills" && (
            <div>
              <Skills />
            </div>
          )}
          {active === "Project" && (
            <div>
              <Project />
            </div>
          )}
          {active === "Contact" && (
            <div>
              <Contact />
            </div>
          )}
          {active === "About" && (
            <div>
              <AboutMe />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
