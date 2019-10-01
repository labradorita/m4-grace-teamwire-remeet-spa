import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";
import "../stylesheets/layouts/ResultsCard.scss";

const ResultsCard = () => {
  return (
    <React.Fragment>
      <div className="results-card">
        <ResultsMain />
        <ResultsList />
        <Return />
      </div>
    </React.Fragment>
  );
};

export default ResultsCard;
