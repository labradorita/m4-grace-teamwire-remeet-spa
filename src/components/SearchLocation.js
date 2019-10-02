import React from "react";
import "../stylesheets/layouts/SearchLocation.scss";

const SearchLocation = props => {
  const { offices, selectedOffices, getAirportNameByCode } = props;
  return (
    <div className="searchlocation">
      <div className="searchlocation__main">
        <p className="searchlocation__title">Meeting Point Availables</p>
        <i className="fas fa-chevron-up" />
      </div>
      <div className="searchlocation__container">
        <ul className="searchlocation__list">
          {offices.map((office, index) => (
            <li className="searchlocation__list__element" key={index}>
              <div>
                <h4 className="searchlocation__list__city">{office.name}</h4>
                <p className="searchlocation__list__airport">
                  {getAirportNameByCode(office.airportCode)}
                </p>
              </div>
              <div className="searchlocation__list__icon">
                <i className="fas fa-plane"></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchLocation;
