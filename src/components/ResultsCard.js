import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";
import "../stylesheets/layouts/ResultsCard.scss";

const ResultsCard = ({ composeList, getAirportPropByCode, clearState }) => {
  return (
    <React.Fragment>
      <div className="results-card">
        <ul className="results-list">
          {composeList.map((city, index) => {
            if (index === 0) {
              return (
                <ResultsMain
                  cheaperCity={city}
                  getAirportPropByCode={getAirportPropByCode}
                  element={composeList[0]}
                />
              );
            } else {
              return (
                <ResultsList
                  city={city}
                  getAirportPropByCode={getAirportPropByCode}
                />
              );
            }
          })}
        </ul>
        <Return clearState={clearState} />
      </div>
    </React.Fragment>
  );
};

export default ResultsCard;
