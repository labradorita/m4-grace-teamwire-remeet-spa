import React from "react";
import "../stylesheets/layouts/ResultsMessage.scss";
import madridCircle from "../images/madrid-circle.jpg";

const ResultsMessage = () => {
  return (
    <div className="results-message">
      <h2 className="results-message__message">We find the best Remeet in</h2>
      <p className="results-message__city">{`Madrid`}</p>
      <div className="results-message__image-container">
        <img
          src={madridCircle}
          alt="Madrid, Edificio Metrópolis"
          className="results-message__image"
        />
      </div>
    </div>
  );
};

export default ResultsMessage;
