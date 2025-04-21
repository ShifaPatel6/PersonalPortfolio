import React, { useState, useEffect } from "react";
import { GiCancel } from "react-icons/gi";

function WelcomeModal() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup when component mounts (page loads)
    setShowPopup(true);

    // Hide popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundSize: "cover",
          padding: "16px",
          borderRadius: "20px",
          boxShadow: "-7px 7px 63px #13073B",
          zIndex: 1000,
          backgroundColor: "#13073B",
        }}
      >
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(assets/backstar.jpg)",
            backgroundSize: "cover",
            borderRadius: "20px",
            opacity: 0.4, // Adjust opacity here (0.0 to 1.0)
            zIndex: -1, // Place it behind the content
          }}
        /> */}
        <div className="d-flex justify-content-center align-items-center gap-4">
          <h2
            style={{
              fontFamily: "Exo 2 ,sans-serif",
              fontSize: "20px",
              color: "white",
            }}
          >
            Welcome to my portfolio !!
            {"  "}
            <img src="assets/welcome.png" alt="" width={23} height={23} />
            {"  "}
            <img src="assets/welcome.png" alt="" width={23} height={23} />
          </h2>
          <div className="d-flex justify-content-end">
            <GiCancel
              alt=""
              width={17}
              height={17}
              onClick={() => setShowPopup(false)}
              style={{
                //   marginBottom: "20px",
                fontSize: "20px",
                cursor: "pointer",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeModal;
