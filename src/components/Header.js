import React from "react";
import '../stylesheets/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="" alt="logo-Remeet" className="header__img" />
            </div>
            <nav>
                <ul className="header__nav">
                    <li className="header__element">About Remeet</li>
                    <li className="header__element">Help</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;