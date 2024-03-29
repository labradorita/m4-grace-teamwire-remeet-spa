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
  selectedEmployees,
  onSelect,
  getPrices,

}) => (
    <div className="App">
      <React.Fragment>
        <SearchCard
          offices={offices}
          employees={employees}
          getAirportPropByCode={getAirportPropByCode}
          handleDateOut={handleDateOut}
          handleDateIn={handleDateIn}
          selectedEmployees={selectedEmployees}
          onSelect={onSelect}
          getPrices={getPrices}
        />
        <div className="home__title">remote meeting calculator</div>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );

export default Home;
