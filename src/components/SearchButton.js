import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/SearchButton.scss";

const SearchButton = () => {
  return (
    <div className="search-button">
      <Link to="/results">
        <button className="search-button__button">
          <strong>SEARCH</strong>
        </button>
      </Link>
    </div>
  );
};

//SearchButton.propTypes = {};
export default SearchButton;
