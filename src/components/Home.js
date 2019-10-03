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
  getPrices
}) => (
<<<<<<< HEAD
    <div className="App">
      <React.Fragment>
        <SearchCard
          offices={offices}
          employees={employees}
          getAirportNameByCode={getAirportNameByCode}
          handleDateOut={handleDateOut}
          handleDateIn={handleDateIn}
          getPrices={getPrices}
        />
        <div className="home__title">remote meeting calculator</div>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );
=======

  <div className="App">
    <React.Fragment>
      <SearchCard
        offices={offices}
        employees={employees}
        getAirportPropByCode={getAirportPropByCode}
        handleDateOut={handleDateOut}
        handleDateIn={handleDateIn}
      />
      <div className="home">
        <div className="home__title">remote meeting calculator</div>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </div>
    </React.Fragment>
  </div>
);
>>>>>>> dev

export default Home;
