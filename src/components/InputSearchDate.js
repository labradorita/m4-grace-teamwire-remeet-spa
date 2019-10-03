import React from "react";

const InputSearchDate = props => {
  return (
    <span className="search-date__wrapper">
      <input
        type="date"
        name={`input${props.type}`}
        className="search-date__item"
        placeholder="start Date"
        min={props.min}
        onChange={props.handleDate}
      />
      <i className="far fa-clock search-date__iclock"></i>
    </span>
  );
};

export default InputSearchDate;
