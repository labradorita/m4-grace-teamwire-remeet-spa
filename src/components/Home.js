import React from "react";
import SearchCard from "./SearchCard";
import homeImage from "../images/Illustration.png";
import "../stylesheets/layouts/Home.scss";

const Home = ({
  offices,
  employees,
  getAirportNameByCode,
  handleDateIn,
  handleDateOut
}) => (
    <div className="App">
      <React.Fragment>
        <SearchCard
          offices={offices}
          employees={employees}
          getAirportNameByCode={getAirportNameByCode}
          handleDateOut={handleDateOut}
          handleDateIn={handleDateIn}
        />
        <div className="home__title">remote meeting calculator</div>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );

export default Home;
