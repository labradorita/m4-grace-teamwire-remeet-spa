import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchParticipants.scss";
import face from "../images/face.png";

const SearchParticipants = () => {
  return (
    <div className="SearchParticipants">
      <h2 className="SearchParticipants__mainTitle">select participants</h2>
      <section className="SearchParticipants__container">
        <ul className="SearchParticipants__list">
          <li className="SearchParticipants__participant">
            <div className="SearchParticipants__data">
              <img
                className="SearchParticipants__img"
                src={face}
                alt="participant face"
              />
              <div className="SearchParticipants__info">
                <h4 className="SearchParticipants__info__name">Ana Phill</h4>
                <p className="SearchParticipants__info__city">Bristol</p>
              </div>
            </div>

            <label htmlFor="checkbox" className="container">
              <input id="checkbox" type="checkbox" defaultChecked="checked" />
              <span class="checkmark"></span>
            </label>
          </li>
        </ul>
      </section>
    </div>
  );
};

//SearchParticipants.propTypes = {};
export default SearchParticipants;
