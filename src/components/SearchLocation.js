import React from "react";
import "../stylesheets/layouts/SearchLocation.scss";
import Collapsible from "./Collapsible";

const SearchLocation = () => {
  return (
    <div className="search-location">
      
      <Collapsible title="Meeting Point Availables" arrow="fas fas fa-chevron-up arrow">
     
      <div className="search-location__container">
        <ul className="search-location__list">
          <li className="search-location__list__element">
            <div>
              <h4 className="search-location__list__city">Munich</h4>
              <p className="search-location__list__airport">Munchen Airport</p>
            </div>
            <div className="search-location__list__icon">
              <i className="fas fa-plane"></i>
            </div>
          </li>
        </ul>
        <ul className="search-location__list">
          <li className="search-location__list__element">
            <div>
              <h4 className="search-location__list__city">Madrid</h4>
              <p className="search-location__list__airport">Adolfo Suarez</p>
            </div>
            <div className="search-location__list__icon">
              <i className="fas fa-plane"></i>
            </div>
          </li>
        </ul>
        <ul className="search-location__list">
          <li className="search-location__list__element">
            <div>
              <h4 className="search-location__list__city">London</h4>
              <p className="search-location__list__airport">Gatwick Airport</p>
            </div>
            <div className="search-location__list__icon">
              <i className="fas fa-plane"></i>
            </div>
          </li>
        </ul>
      </div>
      </Collapsible>
    </div>
  );
};

export default SearchLocation;
