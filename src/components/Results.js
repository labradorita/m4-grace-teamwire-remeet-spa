import React from "react";
import ResultsCard from "./ResultsCard";
import "../stylesheets/layouts/Results.scss";
import resultCity from "../images/result-city.png";
import resultBubble from "../images/bubble.png";

import ResultsMessage from "./ResultsMessage";

const Results = ({ composeList, getAirportPropByCode }) => {
  console.log(composeList)
  return (
    < React.Fragment >
      <div className="results">
        <ResultsCard composeList={composeList} getAirportPropByCode={getAirportPropByCode} />
        <ResultsMessage />
        <img
          src={resultCity}
          alt="Tu ciudad es {`city`}"
          className="results__city-image"
        />
        <div className="results__bottom-decoration">
          <img
            src={resultBubble}
            alt="Remeet"
            className="results__bottom-image"
          />
        </div>
      </div>
    </React.Fragment >
  );
};

export default Results;
