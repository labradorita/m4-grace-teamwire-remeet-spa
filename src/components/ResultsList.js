import React from "react";
import "../stylesheets/layouts/ResultsMain.scss";

const ResultsList = () => {
  return (
    <ul className="results-list">
      <li className="results-list__item">
        <div className="results-list__item-city">
          <div className="results-list__item-city--title">
            <h3>London</h3>
            <small>Gatwick Airport</small>
          </div>
          <div className="results-list__item--total-price">
            <h2>1.250€</h2>
            <small>TOTAL PRICE</small>
          </div>
        </div>
        <div className="results-main__participants--left-column">
          <h4 className="results-main__participants-number">
            <i className="far fa-user"></i>
            {`Nº`} participants
          </h4>
          <p className="results-main__participants-location">
            From {`location`}
          </p>
        </div>
        <div className="results-main__participants--right-column">
          <number className="results-main__participants-price">{`000 €`}</number>
        </div>
      </li>
    </ul>
  );
};

export default ResultsList;
