import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchParticipants.scss";
import face from "../images/face.png";

const SearchParticipants = props => {
  const { employees, getAirportNameByCode } = props;
  return (
    <div className="SearchParticipants">
      <h2 className="SearchParticipants__mainTitle">select participants</h2>
      <section className="SearchParticipants__container">
        <ul className="SearchParticipants__list">
          {employees.map(employee => (
            <li className="SearchParticipants__participant">
              <img
                className="SearchParticipants__img"
                src={face}
                alt="participant face"
              />
              <div className="SearchParticipants__info">
                <h4 className="SearchParticipants__info__name">
                  {employee.name}
                </h4>
                <p className="SearchParticipants__info__city">
                  {getAirportNameByCode(employee.airportCode)}
                </p>
              </div>

              <input
                className="SearchParticipants__checkbox"
                type="checkbox"
                defaultChecked="checked"
                //onChange =
              ></input>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

//SearchParticipants.propTypes = {};
export default SearchParticipants;
