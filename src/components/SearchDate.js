import React from "react";
import InputSearchDate from "./InputSearchDate";
import "../stylesheets/layouts/searchDate.scss";



const SearchDate = props => {
  const actualDate = new Date();
  const year = actualDate.getUTCFullYear();
  const month = actualDate.getUTCMonth() + 1;
  const day = actualDate.getUTCDay();
  const currentDate = year + "-" + month + "-" + day;
  return (
    <section className="search-date">
      <h2 className="search-date__title">Select Date</h2>
      <div className="search-date__inputs-container">
        <InputSearchDate
          id="start"
          min={currentDate}
          handleDate={props.handleDateIn}
        />
        <InputSearchDate id="end" handleDate={props.handleDateOut} min={currentDate} />
      </div>
    </section>
  );
};

export default SearchDate;
