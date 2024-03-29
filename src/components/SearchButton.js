import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/SearchButton.scss";

const SearchButton = ({ getPrices }) => {
  return (
    <div className="search-button">
      <Link to="/results">
        <button className="search-button__button" onClick={getPrices}>
          <strong>SEARCH</strong>
        </button>
      </Link>
    </div>
  );
};

//SearchButton.propTypes = {};
export default SearchButton;
