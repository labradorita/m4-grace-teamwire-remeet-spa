import React from "react";
import "../stylesheets/layouts/ResultsMain.scss";

const ResultsMain = () => {
  return (
    <div className="results-main">
      <img
        src="https://cdn.civitatis.com/espana/madrid/guia/madrid.jpg"
        alt="Madrid, Edificio Metrópolis"
        className="results-main__image"
      />
      <div className="results-main__city-airport-price">
        <h2 className="results-main__city">City</h2>
        <p className="results-main__airport">Airport</p>
        <p className="results-main__price">0000 €</p>
      </div>
      <div className="results-main__book-column">
        <button className="results-main__book-button">BOOK</button>
        <p className="results-main__book-column--total-price">TOTAL PRICE</p>
      </div>
      <div className="results-main__participants-info">
        <ul className="results-main__participants-list">
          <li className="results-main__participants-item">
            <h4 className="results-main__participants-number">
              {`Nº`} participants
            </h4>
            <p className="results-main__participants-location">
              From {`location`}
            </p>
            <number>{`price for location €`}</number>
          </li>
          <li className="results-main__participants-item">
            <h4 className="results-main__participants-number">
              {`Nº`} participants
            </h4>
            <p className="results-main__participants-location">
              From {`location`}
            </p>
            <number>{`price for location €`}</number>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ResultsMain;
