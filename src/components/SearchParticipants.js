import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchParticipants.scss";
import face from "../images/face.png";

const SearchParticipants = () => {
  return (
    <div className="search-participants">
      <h2 className="search-participants__title">select participants</h2>
      <section className="search-participants__container">
        <ul className="search-participants__list">
          <li className="search-participants__participant">
            <div className="search-participants__data">
              <img
                className="search-participants__image"
                src={face}
                alt="participant face"
              />
              <div className="search-participants__info">
                <h4 className="search-participants__info-name">Ana Phill</h4>
                <p className="search-participants__info-city">Bristol</p>
              </div>
            </div>
            <label htmlFor="checkbox" className="container">
              <input id="checkbox" type="checkbox" defaultChecked="checked" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li className="search-participants__participant">
            <div className="search-participants__data">
              <img
                className="search-participants__image"
                src={face}
                alt="participant face"
              />
              <div className="search-participants__info">
                <h4 className="search-participants__info-name">Ana Phill</h4>
                <p className="search-participants__info-city">Bristol</p>
              </div>
            </div>
            <label htmlFor="checkbox" className="container">
              <input id="checkbox" type="checkbox" defaultChecked="checked" />
              <span class="checkmark"></span>
            </label>
          </li>
          <li className="search-participants__participant">
            <div className="search-participants__data">
              <img
                className="search-participants__image"
                src={face}
                alt="participant face"
              />
              <div className="search-participants__info">
                <h4 className="search-participants__info-name">Ana Phill</h4>
                <p className="search-participants__info-city">Bristol</p>
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
