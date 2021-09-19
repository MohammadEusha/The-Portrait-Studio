import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <div className="d-flex align-items-center container">
                    <FontAwesomeIcon icon={faArrowLeft} className="fa-4x pe-3" />
                    <Header />
                    <FontAwesomeIcon icon={faArrowRight} className="fa-4x ps-3" />
                </div>
            </div>
            <div>
                <About />
            </div>
        </div>
    );
};

export default Home;