import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/Return.scss";

const Return = () => {
  return (
    <Link to="/" className="return-button">
      NEW SEARCH
    </Link>
  );
};

export default Return;
