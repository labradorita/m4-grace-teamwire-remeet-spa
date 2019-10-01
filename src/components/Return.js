import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/Return.scss";

const Return = () => {
  return (
    <Link to="/">
      <button className="return-button">NEW SEARCH</button>
    </Link>
  );
};

export default Return;
