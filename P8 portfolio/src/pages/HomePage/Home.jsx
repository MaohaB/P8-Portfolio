import React from "react";
import HeaderBanner from "../../components/HeaderBanner.jsx"
import About from "../../components/About.jsx";
import Portfolio from './Portfolio.jsx';
import { Link, Element  } from 'react-scroll';
import "./about.scss";
import "./homepage_style.scss"

const Home = () => {
    return (
        <div className="Home">
            <HeaderBanner id="top"/>
            <Element  id="about-section">
            <h2>About me</h2>
            <About />
            <h2>Mes projets</h2>
            <Portfolio />
            </Element >
        </div>
    );
} ;

export default Home; 