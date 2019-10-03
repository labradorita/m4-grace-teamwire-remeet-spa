import React from "react";
import SearchCard from "./SearchCard";
import homeImage from "../images/Illustration.png";
import "../stylesheets/layouts/Home.scss";

const Home = ({
  offices,
  employees,
  getAirportPropByCode,
  handleDateIn,
  handleDateOut,
  getAirportObjectByCode,
  airport,
  getSelectedEmployees
}) => (
  <div className="App">
    <React.Fragment>
      <SearchCard
        offices={offices}
        employees={employees}
        getAirportPropByCode={getAirportPropByCode}
        getAirportObjectByCode={getAirportObjectByCode}
        handleDateOut={handleDateOut}
        handleDateIn={handleDateIn}
        airport={airport}
        getSelectedEmployees={getSelectedEmployees}
      />
      <div className="home__title">remote meeting calculator</div>
      <img src={homeImage} alt="map illustration" className="home__image" />
    </React.Fragment>
  </div>
);

export default Home;
