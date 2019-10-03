import React from "react";
import "../stylesheets/layouts/ResultsMain.scss";

const ResultsMain = props => {
  const { element, getAirportPropByCode } = props;
  return (
    <div className="results-main">
      <img
        src={getAirportPropByCode(element.airportTo)('image')}
        alt={getAirportPropByCode(element.airportTo)('name')}
        className="results-main__image"
      />
      <div className="results-main__booking-section">
        <div className="results-main__city-airport-price">
          <h2 className="results-main__city">{props.cheaperCity.airportTo}</h2>
          <p className="results-main__airport">
            {getAirportPropByCode(element.airportTo)("name")}
          </p>
          <p className="results-main__price">{element.totalToAirport}€</p>
        </div>
        <div className="results-main__book-column">
          <button className="results-main__book-button">BOOK</button>
          <p className="results-main__total-price">TOTAL PRICE</p>
        </div>
      </div>
      <div className="results-main__participants-info">
        <ul className="results-main__participants-list">
          {element.participantsResume.map(participant => (
            <li className="results-main__participants-item">
              <div className="results-main__participants--left-column">
                <h4 className="results-main__participants-number">
                  <i className="far fa-user"></i>
                  {participant.count} participants
                </h4>
                <p className="results-main__participants-location">
                  From {participant.airportFrom}
                </p>
              </div>
              <div className="results-main__participants--right-column">
                <p className="results-main__participants-price">
                  {participant.singlePrice}€
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResultsMain;
