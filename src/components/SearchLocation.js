import React from "react";
import "../stylesheets/layouts/SearchLocation.scss";

const SearchLocation = () => {
  return (
    <div className="search-location">
      <div className="search-location__main">
        <p className="search-location__title">Meeting Point Availables</p>
        <i className="fas fa-chevron-up" />
      </div>
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
    </div>
  );
};

export default SearchLocation;
