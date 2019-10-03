import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";
import "../stylesheets/layouts/ResultsCard.scss";

const ResultsCard = ({ composeList }) => {
  return (
    <React.Fragment>
      <div className="results-card">
        {composeList.map((city, index) => {
          if (index === 0) {
            return (<ResultsMain cheaperCity={city} />)
          }
        })}
        <ul className="results-list">
          {composeList.map((city, index) => {
            if (index > 0) {
              return (
                <ResultsList city={city} />
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
