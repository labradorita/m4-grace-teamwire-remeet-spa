import React from 'react';
import '../stylesheets/SearchLocation.scss'


const SearchLocation = ()=>{
    return(
    <div class="searchlocation">
        <h3 className="searchlocation__title">Meeting Point Availables</h3>
        <i class="fas fa-chevron-up"/>
        <div>
            <ul className= "searchlocation__list">
                <li className="searchlocation__city">Munich</li>
                <p className="searchlocation__airport">Munchen Airport</p>
                <li className="searchlocation__city">Madrid</li>
                <p className="searchlocation__airport">Adolfo Suarez Barjas</p>
                <i class="fas fa-plane"/>
            </ul>
        </div>

    </div>
    );
}

export default SearchLocation;