import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDate from "./SearchDate";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";
import homeImage from "../images/Illustration.png";
import "../stylesheets/layouts/Home.scss";

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
        <SearchButton />
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );
};

export default Home;
