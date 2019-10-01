import React from "react";
//import PropTypes from "prop-types";
import "../stylesheets/layouts/SearchParticipants.scss";
import face from "../images/face-1.jpg";
import face2 from "../images/face-2.png";

const SearchParticipants = props => {
  const { employees } = props;
  return (
    <div className="SearchParticipants">
      <h2 className="SearchParticipants__mainTitle">select participants</h2>
      <section className="SearchParticipants__container">
        <ul className="SearchParticipants__list">
          <li className="SearchParticipants__participant">
            <img
              className="SearchParticipants__img"
              src={face}
              alt="participant face"
            />
            <div className="SearchParticipants__info">
              <h4 className="SearchParticipants__info__name">Ana Phill</h4>
              <p className="SearchParticipants__info__city">Bristol</p>
            </div>

            <input
              className="SearchParticipants__checkbox"
              type="checkbox"
              defaultChecked="checked"
              //onChange =
            ></input>
          </li>
        </ul>

        <ul className="SearchParticipants__list">
          <li className="SearchParticipants__participant">
            <img
              className="SearchParticipants__img"
              src={face2}
              alt="participant face"
            />
            <div className="SearchParticipants__info">
              <h4 className="SearchParticipants__info__name">Roberto García</h4>
              <p className="SearchParticipants__info__city">Madrid</p>
            </div>
            <input
              className="SearchParticipants__checkbox"
              type="checkbox"
              defaultChecked="checked"
              //onChange =
            ></input>
          </li>
        </ul>
      </section>
    </div>
  );
};

//SearchParticipants.propTypes = {};
export default SearchParticipants;
