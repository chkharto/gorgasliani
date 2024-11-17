import React from "react";

const Abiturienticomp = ({ img, text, onLearnMoreClick }) => {
  return (
    <div className="component">
      <img src={img} alt="" />
      <p className="txt">{text}</p>
      <p className="learn-more" onClick={onLearnMoreClick}>
        იხილეთ მეტი
      </p>
    </div>
  );
};

export default Abiturienticomp;
