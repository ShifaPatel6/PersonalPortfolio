import React from "react";
import "../Css/Project.css";
import ModalDiv from "../components/Modal";
import ModalImage from "../components/ModalImage";
function Projects() {
  const ProjectsArray = [
    {
      id: 4,
      images: [
        "/assets/ecommlogin.jpg",
        "/assets/ecommregi.jpg",
        "/assets/ecommhome.jpg",
        "/assets/ecommhome1.jpg",
        "/assets/ecommhome3.jpg",
        "/assets/ecommhome4.jpg",
        "/assets/fav.jpg",
        "/assets/upload.jpg",
        "/assets/upload1.jpg",
      ],
      img: "/assets/ecommlogin.jpg",
      title: "Ecommerce Website",
      body: "This is an AI-powered e-commerce website built using frontend technologies such as React, Bootstrap, HTML, and CSS. It integrates mock APIs for product listings, user login, and registration functionality. For the AI-based image search feature, the backend is developed in Python using pretrained models to extract embeddings and match products. Users can upload an image to instantly find visually similar products. The backend API is built with Python and utilizes an SQLite3 database for product metadata storage.",
      technologies:
        "React , JavaScript, Bootstrap5 , Html, Python, Sqlite3 , FastApi",
    },
    {
      id: 7,
      images: [
        "/assets/dashboard.jpg",
        "/assets/sales.jpg",
        "/assets/Reps.jpg",
        "/assets/product.jpg",
        "/assets/repsPop.jpg",
        "/assets/regions.jpg",
        "/assets/regionPop.jpg",
      ],
      img: "/assets/dashboard.jpg",
      title: "Sales Dashboard",
      body: "This is MERN stack based Sales Dashboard website to help business to take their sales details by visualize grpahs.it can help owners to see their targets and meets , their product details, their sales representatives , top perfomring product and top performing sales representatives. Created and integrated API using nodejs and expressjs to display data of products , sales, regions , sales representatives. ",
      technologies: "React , JavaScript, MaterialUI , Html, Nodejs, Expressjs",
    },
    {
      id: 6,
      images: [
        "/assets/auth.jpg",
        "/assets/auth1.jpg",
        "/assets/auth2.jpg",
        "/assets/auth3.jpg",
        "/assets/auth4.jpg",
        "/assets/auth5.jpg",
        "/assets/auth6.jpg",
        "/assets/auth7.jpg",
        "/assets/auth8.jpg",
        "/assets/auth9.jpg",
      ],
      img: "/assets/auth.jpg",
      title: "Users Authentication System",
      body: "I built a secure user authentication system using the MERN stack, focusing on backend functionality with Node.js, Express.js, and MongoDB. The system allows users to register and log in using JWT-based authentication. It includes an email verification flow where a one-time OTP is sent to the user's email, which must be entered to verify the account before login. All user data and verification statuses are stored in MongoDB. The frontend is built with React and styled using Material UI, creating a seamless and user-friendly interface throughout the registration, verification, and login process.",
      technologies:
        "React , Material UI , Html, MonogDb, Nodejs, Expressjs, JWT , bcrypt",
    },
    {
      id: 5,
      images: [
        "/assets/chatbot1.jpg",
        "/assets/chatbot2.jpg",
        "/assets/chatbot3.jpg",
        "/assets/chatbot4.jpg",
      ],
      img: "/assets/chatbot1.jpg",
      title: "AI Chatbot",
      body: "Developed a fully AI Chatbot.Integrated OpenRouter API for real-time AI interaction. Built a Node.js & Express.js backend to handle conversational logic and API communication. Designed a responsive and dynamic frontend using React, Tailwind CSS, and HTML. Enabled voice input functionality by integrating speech-to-text, allowing users to ask questions vocally.Added theme-switching support to enhance UI interactivity and user experience.",

      technologies: "HTML , CSS , Nodejs , Tailwind Css, React , Expressjs",
    },
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
      id: 8,
      images: [
        "/assets/inprogress.png",
       
      ],
      img:"/assets/inprogress.png",
      title: "AI Freelancing tools",
      body: "Developing AI freelancing tools using React, JavaScript, tailwind css, HTML, and CSS.using Nodejs and express js for backend and Supabase DB, The project includes a variety of AI-powered tools designed to assist freelancers in their work. These tools may include features such as AI-based content generation, Invoice generation, and productivity enhancement. The frontend is built with React for a dynamic user experience, while Bootstrap5 ensures a responsive and visually appealing design. The project aims to provide freelancers with innovative solutions to streamline their workflow and enhance their productivity.",
      technologies: "HTML , CSS , JavaScript , Tailwind, React, Node js , Supabase",
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
