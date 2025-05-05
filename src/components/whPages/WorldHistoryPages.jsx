import React from "react";

const WorldHistoryPages = ({ title, description, images, handleReadMore }) => {
  return (
    <div className="content">
      {/* Left Side: Text */}
      <div className="text-section">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="read-more-btn" onClick={handleReadMore}>
          იხილეთ მეტი...
        </button>
      </div>

      {/* Right Side: Images */}
      <div className="images-section">
        {images.map((img, index) => (
          <div key={index} className="image-container">
            <img src={img} alt="history" className="history-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldHistoryPages;
