import React from "react";
import "../stylesheets/layouts/Results.scss";
import ResultsCard from "./ResultsCard";

import ResultsMessage from "./ResultsMessage";

const Results = () => {
  return (
    <React.Fragment>
      <div className="results">
        <ResultsCard />
        <ResultsMessage />
      </div>
    </React.Fragment>
  );
};

export default Results;
