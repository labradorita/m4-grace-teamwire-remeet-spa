import React from "react";
import ResultsCard from "./ResultsCard";
import Return from "./Return";
import ResultsMessage from "./ResultsMessage";

const Results = () => {
  return (
    <React.Fragment>
      <div>Results</div>
      <ResultsCard />
      <Return />
      <ResultsMessage />
    </React.Fragment>
  );
};

export default Results;
