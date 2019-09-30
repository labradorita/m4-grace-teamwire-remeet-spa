import React from "react";
import '../stylesheets/Header.scss'

const Header = props => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="" alt="logo-Remeet" className="header__img" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>About Remeet</li>
                    <li>Help</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;