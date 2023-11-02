import React from "react";
import './App.css';
import InfoBox2 from "./InfoBox2";

function AboutUs() {
    return (
        <div className="contact">
            <header>
                <h1>About Us</h1>
            </header>
            <div className="vertical-infobox-container">
                <InfoBox2 title="Craig Oie Lugo" content="Craig Oie Lugo is a former student at Largo High School with a passion for music production and graphic design." image="craig.png"/>
                <InfoBox2 title="William Zhu" content="William Zhu is a student at the University of Florida with a drive
                to give back to his community through his passions in software development and computer science" image="will.png"/>
            </div>
        </div>
    );
}

export default AboutUs;