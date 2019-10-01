import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";
import "../stylesheets/layouts/Results.scss";

const ResultsCard = () => {
  return (
    <React.Fragment>
      <div className="results__card">
        <ResultsMain />
        <div className="results__container">
          <ResultsList />
          <Return />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResultsCard;
