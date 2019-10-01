import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDate from "./SearchDate";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";

const Home = () => {
  return (
    <div className="App">
      <SearchDate
      // handleDateIn={this.handleDateIn}
      // handleDateOut={this.handleDateOut}
      />
      <React.Fragment>
        <SearchParticipants />
        <SearchLocation />
        <SearchButton />;
      </React.Fragment>
    </div>
  );
};

export default Home;
