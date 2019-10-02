import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDate from "./SearchDate";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";

const Home = props => {
  return (
    <div className="App">
      <SearchDate
        handleDateIn={props.handleDateIn}
        handleDateOut={props.handleDateOut}
      />
      <React.Fragment>
        <SearchParticipants />
        <SearchLocation />
        <SearchButton getPrices={props.getPrices} />;
      </React.Fragment>
    </div>
  );
};

export default Home;
