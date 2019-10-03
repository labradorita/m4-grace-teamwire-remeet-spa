import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchParticipants.scss";
import face from "../images/face.png";

const SearchParticipants = props => {
  const { employees, getAirportPropByCode } = props;
  return (
    <div className="search-participants">
      <h2 className="search-participants__title">select participants</h2>
      <section className="search-participants__container">
        <ul className="search-participants__list">
          {employees.map(employee => (
            <li className="search-participants__participant">
              <div className="search-participants__data">
                <img
                  className="search-participants__image"
                  src={getAirportPropByCode(employee.airportCode)("imageThumb")}
                  alt="participant face"
                />
                <div className="search-participants__info">
                  <h4 className="search-participants__info-name">
                    {employee.name}
                  </h4>
                  <p className="search-participants__info-city">
                    {getAirportPropByCode(employee.airportCode)("name")}
                  </p>
                </div>
              </div>
              <label htmlFor={employee.name} className="container">
                <input
                  id={employee.name}
                  type="checkbox"
                  defaultChecked="checked"
                />
                <span className="checkmark"></span>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

//SearchParticipants.propTypes = {};
export default SearchParticipants;
