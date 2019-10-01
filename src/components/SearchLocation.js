import React from "react";
import "../stylesheets/SearchLocation.scss";

const SearchLocation = () => {
  return (
    <div className="searchlocation">
      <p className="searchlocation__title">Meeting Point Availables</p>
      <div>
        <i className="fas fa-chevron-up" />
      </div>
      <div className="searchlocation__container">
        <ul className="searchlocation__list">
          <li>
            <h4 className="searchlocation__city">Munich</h4>
            <p className="searchlocation__airport">Munchen Airport</p>
          </li>
        </ul>
        <ul className="searchlocation__list">
          <li>
            <h4 className="searchlocation__city">Madrid</h4>
            <p className="searchlocation__airport">Adolfo Suarez</p>
          </li>
        </ul>
        <ul className="searchlocation__list">
          <li>
            <h4 className="searchlocation__city">London</h4>
            <p className="searchlocation__airport">Gatwick Airport</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchLocation;
