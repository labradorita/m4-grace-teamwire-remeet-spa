import React from 'react';
import '../stylesheets/layouts/SearchLocation.scss'




const SearchLocation = () => {
    return (
        <div className="searchlocation">
            <div className="searchlocation__main">
                <p className="searchlocation__title">Meeting Point Availables</p>
                <i className="fas fa-chevron-up" />
            </div>
            <div className="searchlocation__container">
                <ul className="searchlocation__list">
                    <li className="searchlocation__list__element">
                        <div>
                            <h4 className="searchlocation__list__city">Munich</h4>
                            <p className="searchlocation__list__airport">Munchen Airport</p>
                        </div>
                        <div className="searchlocation__list__icon">
                            <i className="fas fa-plane"></i>
                        </div>

                    </li>

                </ul>
                <ul className="searchlocation__list">
                    <li className="searchlocation__list__element">
                        <div>
                            <h4 className="searchlocation__list__city">Madrid</h4>
                            <p className="searchlocation__list__airport">Adolfo Suarez</p>
                        </div>
                        <div className="searchlocation__list__icon">
                            <i className="fas fa-plane"></i>
                        </div>
                    </li>

                </ul>
                <ul className="searchlocation__list">
                    <li className="searchlocation__list__element">
                        <div>
                            <h4 className="searchlocation__list__city">London</h4>
                            <p className="searchlocation__list__airport">Gatwick Airport</p>
                        </div>
                        <div className="searchlocation__list__icon">
                            <i className="fas fa-plane"></i>
                        </div>

                    </li>

                </ul>
            </div>

        </div>
    );
}

export default SearchLocation;
