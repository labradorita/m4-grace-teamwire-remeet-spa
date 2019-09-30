import React from "react";
import "../stylesheets/layouts/Results.scss";

const ResultsList = () => {
  return (
    <li className="results__item">
      <div>
        <div className="results__item__city">
          <div>
            <h3>London</h3>
            <small>Gatwick Airport</small>
          </div>
          <div className="results__item__totalprice">
            <h2>1.250€</h2>
            <small>TOTAL PRICE</small>
          </div>
        </div>
        <div className="results__item__partial">
          <div className="results__item__participants">
            <h4> 2 Participants</h4>
            <small>From Madrid</small>
          </div>
          <p className="results__item__price">950€</p>
        </div>
        <div className="results__item__partial">
          <div className="results__item__participants">
            <h4> 1 Participant</h4>
            <small>From Geneva</small>
          </div>
          <p className="results__item__price">300€</p>
        </div>
      </div>
    </li>
  );
};

export default ResultsList;
