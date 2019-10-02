import React from "react";
import "../stylesheets/layouts/SearchLocation.scss";
import Collapsible from "./Collapsible";

const SearchLocation = props => {
  const { offices, getAirportNameByCode } = props;

  return (
    <div className="search-location">
      <Collapsible
        title="Meeting Point Availables"
        arrow="fas fas fa-chevron-up arrow"
      >
        <div className="search-location__container">
          <ul className="search-location__list">
            {offices.map(office => (
              <li key={office.name} className="search-location__list__element">
                <div>
                  <h4 className="search-location__list__city">{office.name}</h4>
                  <p className="search-location__list__airport">
                    {getAirportNameByCode(office.airportCode)}
                  </p>
                </div>
                <div className="search-location__list__icon">
                  <i className="fas fa-plane"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>
    </div>
  );
};

export default SearchLocation;
