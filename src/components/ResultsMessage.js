import React from "react";
import "../stylesheets/components/ResultsMessage.scss";

const ResultsMessage = () => {
  return (
    <div className="results-message">
      <h2 className="results-message__message">We find the best Remeet in</h2>
      <p className="results-message__city">{`Madrid`}</p>
      <img
        src={`https://cdn.civitatis.com/espana/madrid/guia/madrid.jpg`}
        alt="Madrid, Edificio Metrópolis"
        className="results-message__image"
      />
    </div>
  );
};

export default ResultsMessage;
