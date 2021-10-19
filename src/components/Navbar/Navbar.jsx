import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar-section-wrapper">
            <nav>
                <ul className="links">
                    <li className="link">HOME</li>
                    <li className="link">ABOUT US</li>
                    <li className="link">DIET PLAN</li>
                    <li className="link">SELECT YOUR PLANS</li>
                </ul>

                <p className="logo">LoGO</p>

                <div className="nav-btns">
                    <button className="btn sign-btn">Sign in</button>
                    <button className="btn reg-btn">Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
