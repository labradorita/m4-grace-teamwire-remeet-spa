import React from 'react';

const InputSearchDate = (props) => {
    return (
        <span className="search__date--wrapper">
            <input type="date" name={`input${props.type}`} className="search__date--item" placeholder="start Date" defaultValue={props.min} onChange={props.handleDate} /> <i className="far fa-clock search__date--iclock"></i>
        </span>
    )
}

export default InputSearchDate;