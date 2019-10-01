import React from "react";
import ResultsMain from "./ResultsMain";
import Return from "./Return";
import ResultsList from "./ResultsList";

const ResultsCard = () => {
  return (
    <React.Fragment>
      <ResultsMain />
      <ResultsList />
      <Return />
    </React.Fragment>
  );
};

export default ResultsCard;
