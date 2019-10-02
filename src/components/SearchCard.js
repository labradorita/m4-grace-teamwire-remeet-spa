import React from "react";
import SearchDate from "./SearchDate"
import SearchParticipants from "./SearchParticipants"
import SearchLocation from "./SearchLocation"
import SearchButton from "./SearchButton"
import "../stylesheets/layouts/SearchCard.scss"


const SearchCard = (props) => {

  return (
    <React.Fragment>
      <div className="search-card">
        <SearchDate />
        <SearchParticipants />
        <SearchLocation />
        <SearchButton getPrices={props.getPrices} />
      </div>
    </React.Fragment>

  )
}





export default SearchCard;