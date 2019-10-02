import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/SearchButton.scss";

const SearchButton = ({ getPrices }) => {
  return (
    <div className="SearchButton">
      <div className="SearchButton__container">
        <Link to="/results">
          <button className="SearchButton__button" onClick={getPrices}>
            <strong>search </strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

//SearchButton.propTypes = {};
export default SearchButton;
