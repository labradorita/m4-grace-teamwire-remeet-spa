import React from "react";
import SearchDate from "./SearchDate"
import SearchParticipants from "./SearchParticipants"
import SearchLocation from "./SearchLocation"
import SearchButton from "./SearchButton"
import "../stylesheets/layouts/SearchCard.scss"


const SearchCard = ()=>{

    return(
        <React.Fragment>
      <div className="search-card">
        <SearchDate />
        <SearchParticipants />
        <SearchLocation />
        <SearchButton />
      </div>
    </React.Fragment>

    )
}





export default SearchCard;