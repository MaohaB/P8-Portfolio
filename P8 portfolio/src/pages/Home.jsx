import React from "react";
import HeaderBanner from "../components/HeaderBanner.jsx"
import Aboutcontainer from "../components/Aboutcontainer.jsx";
import "./about.scss";

const Home = () => {
    return (
        <div className="Home">
            <HeaderBanner />
            <Aboutcontainer />
        </div>
    );
} ;

export default Home; 