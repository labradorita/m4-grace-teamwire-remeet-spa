import React from "react";
import ResultsList from "./ResultsList";
import ResultsButton from "./ResultsButton";
import Return from "./Return";
import "../stylesheets/layouts/Results.scss";

const Results = () => {
  return (
    <React.Fragment>
      <div className="results__container">
        <ul className="results__list">
          <ResultsList />
        </ul>
        <ResultsButton />
      </div>
      <Return />
    </React.Fragment>
  );
};

export default Results;
