import React from "react";
import "../stylesheets/layouts/ResultsMessage.scss";
import madridCircle from "../images/madrid-circle.jpg";

const ResultsMessage = props => {
  if (props.element) {
    const { element, getAirportPropByCode } = props;
    return (
      <div className="results-message">
        <h2 className="results-message__message">We find the best Remeet in</h2>
        <p className="results-message__city">
          {getAirportPropByCode(element.airportTo)("name")}
        </p>
        <div className="results-message__image-container">
          <img
            src={getAirportPropByCode(element.airportTo)("imageThumb")}
            alt="Madrid, Edificio Metrópolis"
            className="results-message__image"
          />
        </div>
      </div>
    );
  } else {
    return "Cargando...";
  }
};

export default ResultsMessage;
