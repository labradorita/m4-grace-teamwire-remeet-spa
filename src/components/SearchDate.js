import React from "react";
import InputSearchDate from "./InputSearchDate";
import "../stylesheets/layouts/searchDate.scss";

const actualDate = new Date();
const year = actualDate.getFullYear();
const month = actualDate.getMonth() + 1;
const day = actualDate.getDay();

const currentDate = year + "-" + month + "-" + day;

const SearchDate = props => {
  return (
    <section className="search-date">
      <h2 className="search-date__title">Select Date</h2>
      <div className="search-date__inputs-container">
        <InputSearchDate
          type="start"
          min={currentDate}
          handleDate={props.handleDateIn}
        />
        <InputSearchDate type="end" handleDate={props.handleDateOut} />
      </div>
    </section>
  );
};

export default SearchDate;
