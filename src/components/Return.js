import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/layouts/Return.scss";

const Return = ({ clearState }) => {
  return (
    <Link to="/" className="return-button" onClick={clearState}>
      NEW SEARCH
    </Link>
  );
};

export default Return;
