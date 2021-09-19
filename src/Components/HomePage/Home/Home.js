import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="bg-img d-flex align-items-center ">
                <Navbar />
                <Header />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};

export default Home;