import React from "react";
import "../Css/Project.css";
import ModalDiv from "../components/Modal";
import ModalImage from "../components/ModalImage";
function Projects() {
  const ProjectsArray = [
    {
      id: 1,
      images: ["/assets/SM1.png", "/assets/SM2.png"],
      img: "/assets/socialmedia.png",
      title: "Social Media (Posting Feature)",
      body: "Developed a dynamic social media posting module with full CRUD functionality. The application allows users to create, update, and delete posts, as well as interact with content through likes and dislikes. Integrated Redux for efficient state management and seamless UI updates. Employed Bootstrap 5 for responsive and modern UI components. API integration was used to persist post data and reflect real-time changes.",
      technologies: "React , Redux , Bootstrap5 , HTML , RTK",
    },
    {
      id: 2,
      images: ["/assets/cook.png", "/assets/cook2.png", "/assets/cook3.png"],
      img: "/assets/cook.png",
      title: "Order Management System",
      body: "Developed a fully responsive frontend interface for an Order Management System using HTML, CSS, and JavaScript, enhanced with Bootstrap for layout and styling consistency. The system interface includes order listings, customer details, product information, and basic interaction features to simulate real-world order processing workflows. Designed with user experience and clarity in mind, the project demonstrates proficiency in structured layout design, dynamic content updates, and responsive web development.",
      technologies: "HTML , CSS , JavaScript , Bootstrap5",
    },
    {
      id: 3,
      images: [
        "/assets/portfolio.png",
        "/assets/portfolio1.png",
        "/assets/portfolio2.png",
        "/assets/portfolio4.png",
        "/assets/portfolio3.png",
      ],
      img: "/assets/portfolio.png",
      title: "Portfolio Website",
      body: "Developed a fully responsive frontend interface for anpersonal portfolio website using HTML, CSS, React , and JavaScript, enhanced with Bootstrap5 for layout and styling consistency. The system interface includes projects, personal details, professional experience.",
      technologies: "HTML , CSS , JavaScript , Bootstrap5, React",
    },
    {
      id: 4,
      images: [],
      img: "/assets/realestate.png",
      title: "Real Estate Management",
      body: "In progress.",
      technologies: "React , Tailwind css , MongoDB , Html ",
    },
  ];
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-wrap Projects-container">
        {ProjectsArray.map((project, index) => (
          <div className="wrapper ">
            <div className="Projects ">
              <img src={project.img} className="Projectimg" />

              <div className="Styledbutton StyledImage d-flex justify-content-between align-items-center flex-wrap">
                <ModalImage
                  title={project.title}
                  images={project.images}
                  id={project.id}
                />

                <ModalDiv
                  title={project.title}
                  body={project.body}
                  technologies={project.technologies}
                />
                {console.log(project.title)}
              </div>
            </div>
            <h2 className="Projectstext">{project.title} </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
