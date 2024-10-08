import React from "react";
import HeaderBanner from "../components/HeaderBanner.jsx"
import Aboutcontainer from "../components/Aboutcontainer.jsx";
import { Link, Element  } from 'react-scroll';
import "./about.scss";

const Home = () => {
    return (
        <div className="Home">
            <HeaderBanner id="top"/>
            <Element  id="about-section">
            <Aboutcontainer />
            </Element >
        </div>
    );
} ;

export default Home; 