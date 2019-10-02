import React from "react";
import ResultsCard from "./ResultsCard";
import "../stylesheets/layouts/Results.scss";
import resultCity from "../images/result-city.png";
import resultBubble from "../images/bubble.png";

import ResultsMessage from "./ResultsMessage";

const Results = ({ composeList }) => {
  return (
    <React.Fragment className="results">
      <ResultsCard />
      <ResultsMessage />
      <img
        src={resultCity}
        alt="Tu ciudad es {`city`}"
        className="results__city-image"
      />
      <img src={resultBubble} alt="Remeet" className="results__bottom-image" />
    </React.Fragment>
  );
};

export default Results;
