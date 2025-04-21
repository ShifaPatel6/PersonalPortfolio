import React from "react";
import { IoImagesOutline } from "react-icons/io5";
import { Modal, Carousel } from "react-bootstrap";
import { useState } from "react";
import "../Css/ModalImg.css";
function ModalImage({ title, images }) {
  const [ImageShow, setImageShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <IoImagesOutline
        onClick={() => {
          console.log("Image icon clicked");
          setImageShow(true);
        }}
      />

      <Modal
        show={ImageShow}
        onHide={() => setImageShow(false)}
        backdrop="static" // Prevents closing when clicking outside
        keyboard={false}
        centered

        // Prevents closing with ESC key
      >
        <Modal.Header closeButton>
          <Modal.Title className="StyledTitle">{title}</Modal.Title>
        </Modal.Header>
        {!images || images.length === 0 ? (
          <div className="text-center p-3 text-black ">In progress</div>
        ) : (
          <Modal.Body>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null} // Disables auto-sliding
              indicators={false}
              controls={images.length > 1} // Show controls only if more than one Image
            >
              {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img src={img} className=" img-fluid carousel-image" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
}

export default ModalImage;
