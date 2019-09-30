import React from 'react';
import InputSearchDate from './InputSearchDate';
import '../stylesheets/layouts/searchDate.scss';

const actualDate = new Date;
const year = actualDate.getFullYear();
const month = actualDate.getMonth() + 1;
const day = actualDate.getDay();

const currentDate = year + "-" + month + "-" + day;

const SearchDate = () => {
    return (
        <section>
            <h2 className="search__date--title">Select Date</h2>
            <InputSearchDate type="start" min={currentDate} />
            <InputSearchDate type="end" />
        </section>
    )
}

export default SearchDate;