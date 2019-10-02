import React from "react";
import SearchCard from "./SearchCard";
import homeImage from "../images/Illustration.png";
import "../stylesheets/layouts/Home.scss";

const Home = props => {
  return (
    <div className="App">
      <React.Fragment>
        <SearchCard getPrices={props.getPrices} />
        <div className="home__title">remote meeting calculator</div>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );
};

export default Home;
