import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/components/Return.scss";

const Return = () => {
  return (
    <Link to="/">
      <button className="return__button">NEW SEARCH</button>
    </Link>
  );
};

export default Return;
