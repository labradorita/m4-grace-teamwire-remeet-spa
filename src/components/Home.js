import React from "react";
import SearchLocation from "./SearchLocation";
import SearchDate from "./SearchDate";
import SearchButton from "./SearchButton";
import SearchParticipants from "./SearchParticipants";

const Home = ({
  offices,
  employees,
  getAirportNameByCode,
  handleDateIn,
  handleDateOut
}) => (
  <div className="App">
    <SearchDate handleDateIn={handleDateIn} handleDateOut={handleDateOut} />
    <React.Fragment>
      <SearchParticipants
        employees={employees}
        getAirportNameByCode={getAirportNameByCode}
      />
      <SearchLocation
        offices={offices}
        getAirportNameByCode={getAirportNameByCode}
      />
      <SearchButton />;
    </React.Fragment>
  </div>
);

export default Home;
