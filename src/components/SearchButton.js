import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchButton.scss";

const SearchButton = () => {
  return (
    <div className="SearchButton__container">
      <button className="SearchButton__button">search</button>
    </div>
  );
};

SearchButton.propTypes = {};
export default SearchButton;
