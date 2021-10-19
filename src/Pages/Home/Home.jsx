import React from 'react';
import Datebox from '../../components/Datebox/Datebox';
import Navbar from '../../components/Navbar/Navbar';
import Productcard from '../../components/Productcards/Productcard';
import './Home.css';

const Home = () => {
    return (
        <div className="home-section-wrapper">
            <Navbar></Navbar>
    
            <section className="banner-wrapper">
                <h4 className="banner-head">Choose your Dishes</h4>
                <p className="banner-para">As per your recomended calorie, choose your dishes from below</p>
            
                <div className="banner-btn">
                    <button className="def-menu">Choose Default Menu</button>
                </div>
            </section>
            <div className="date-food">
                <Datebox></Datebox>
                <Productcard></Productcard>
            </div>
            
        </div>
    )
}

export default Home;
