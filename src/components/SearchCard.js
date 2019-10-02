import React from "react";
import SearchDate from "./SearchDate";
import SearchParticipants from "./SearchParticipants";
import SearchLocation from "./SearchLocation";
import SearchButton from "./SearchButton";
import "../stylesheets/layouts/SearchCard.scss";

const SearchCard = props => {
  const {
    offices,
    employees,
    handleDateIn,
    handleDateOut,
    getAirportNameByCode
  } = props;

  return (
    <React.Fragment>
      <div className="search-card">
        <SearchDate handleDateIn={handleDateIn} handleDateOut={handleDateOut} />
        <SearchParticipants
          employees={employees}
          getAirportNameByCode={getAirportNameByCode}
        />
        <SearchLocation
          offices={offices}
          getAirportNameByCode={getAirportNameByCode}
        />
        <SearchButton getPrices={props.getPrices} />
      </div>
    </React.Fragment>
  );
};

export default SearchCard;
