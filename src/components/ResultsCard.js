import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";
import "../stylesheets/layouts/ResultsCard.scss";

const ResultsCard = ({ composeList, getAirportPropByCode }) => {
  return (
    <React.Fragment>
      <div className="results-card">
        <ul className="results-list">
          {composeList.map((city, index) => {
            if (index === 0) {
              return (<ResultsMain cheaperCity={city} getAirportPropByCode={getAirportPropByCode} />)
            } else {
              return (
                <ResultsList city={city} getAirportPropByCode={getAirportPropByCode} />
              )
            }
          })}
        </ul>
        <Return />
      </div>
    </React.Fragment>
  );
};

export default ResultsCard;
