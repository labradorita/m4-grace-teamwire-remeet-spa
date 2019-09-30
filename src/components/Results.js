import React from "react";
import ResultsList from "./ResultsList";
import ResultsButton from "./ResultsButton";
import "../stylesheets/layouts/Results.scss";

const Results = () => {
  return (
    <div className="results__list__container">
      <ul className="results__list">
        <ResultsList />
      </ul>
      <ResultsButton />
    </div>
  );
};

export default Results;
