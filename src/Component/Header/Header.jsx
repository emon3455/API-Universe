import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>

            <div className="">
                <h2>ApI Universe</h2>
            </div>

            <div className="">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/restCountry">Rest Countrys</Link>
                <Link to="mealDb">Meal DB</Link>
                <Link to="sportsDb">Sports DB</Link>
                <Link to="contact">Contact</Link>
            </div>
            
        </nav>
    );
};

export default Header;