import React from "react";
import SearchCard from "./SearchCard";
import homeImage from "../images/Illustration.png";
import "../stylesheets/layouts/Home.scss";

const Home = (props) => {
  return (
    <div className="App">
     
      <React.Fragment>
       <SearchCard/>
        <img src={homeImage} alt="map illustration" className="home__image" />
      </React.Fragment>
    </div>
  );
};

export default Home;
