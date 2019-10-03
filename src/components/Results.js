import React from "react";
import ResultsCard from "./ResultsCard";
import "../stylesheets/layouts/Results.scss";
import resultCity from "../images/result-city.png";
import resultBubble from "../images/bubble.png";

import ResultsMessage from "./ResultsMessage";

const Results = (props) => {
  if (props.composeList !== undefined) {
    const { composeList, getAirportPropByCode } = props;
    console.log(composeList[0])
    return (< React.Fragment >
      <div className="results">
        <ResultsCard composeList={composeList} getAirportPropByCode={getAirportPropByCode} />
        <ResultsMessage element={composeList[0]} getAirportPropByCode={getAirportPropByCode} />
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
    </React.Fragment >)
  } else {
    return ("Cargando...")
  }
}

export default Results;
