import React from "react";
import "../stylesheets/layouts/ResultsMain.scss";
import "../stylesheets/layouts/ResultsList.scss";

const ResultsList = ({ city }) => {
  return (
    <li className="results-list__item">
      <div className="results-list__item-container">
        <div className="results-list__item-left">
          <h3 className="results-list__item-city">{`City`}</h3>
          <small className="results-list__item-airport">
            {`Airport Name`}
          </small>
        </div>

        <div className="results-list__item-right">
          <h2 className="results-list__item--total-amount">0000€</h2>
          <small className="results-list__item--total-price">
            TOTAL PRICE
    </small>
        </div>
      </div>
      <ul className="results-main__participants-list">
        <li className="results-main__participants-item">
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
            <p className="results-main__participants-price">{`000 €`}</p>
          </div>
        </li>
        <li className="results-main__participants-item">
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
            <p className="results-main__participants-price">{`000 €`}</p>
          </div>
        </li>
      </ul>
      <div className="results-list__button-container">
        <button className="results-list__booking-button">BOOK</button>
      </div>
    </li>
  );
};

export default ResultsList;
