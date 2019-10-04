import React from "react";
import ResultsCard from "./ResultsCard";
import "../stylesheets/layouts/Results.scss";
import resultCity from "../images/result-city.png";
import resultBubble from "../images/bubble.png";
import Loader from './Loader';
import ResultsMessage from "./ResultsMessage";
import Return from "./Return";

const Results = (props) => {
  if (props.composeList.length) {
    const { composeList, getAirportPropByCode, clearState } = props;
    return (< React.Fragment >
      <div className="results">
        <ResultsCard composeList={composeList} getAirportPropByCode={getAirportPropByCode} clearState={clearState} />
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
    const { clearState } = props
    return (
      <section className="results__section">
        <Loader />
        {/* <Return clearState={clearState} /> */}
      </section>)

  }
}

export default Results;
