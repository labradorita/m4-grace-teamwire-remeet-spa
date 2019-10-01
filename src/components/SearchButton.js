import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchButton.scss";

const SearchButton = () => {
  return (
    <div className="SearchButton">
      <div className="SearchButton__container">
        <button className="SearchButton__button">
          <strong>search </strong>
        </button>
      </div>
    </div>
  );
};

SearchButton.propTypes = {};
export default SearchButton;
