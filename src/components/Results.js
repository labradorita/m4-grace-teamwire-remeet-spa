import React from "react";
import "../stylesheets/layouts/Results.scss";
import ResultsCard from "./ResultsCard";

import ResultsMessage from "./ResultsMessage";

const Results = () => {
  return (
    <React.Fragment>
      <div>Results</div>
      <ResultsCard />
      <ResultsMessage />
    </React.Fragment>
  );
};

export default Results;
