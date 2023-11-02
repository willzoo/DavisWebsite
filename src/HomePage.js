import React from 'react';
import './Homepage.css';
import './App.js'
import './InfoBox.js'
import InfoBox from "./InfoBox";
function HomePage() {
    return (
        <div>
            <div className="homepage-background">
                <section className="content">
                    <header>
                        <h2>BEN T DAVIS BEACH CLEANUP</h2>
                    </header>
                    <p className="miniHeader">Organized By:</p>
                    <p>Craig Oie Lugo and William Zhu</p>
                    <p className="miniHeader">In Collaboration with:</p>
                    <p>Hillsborough County Environmental Protection Commission</p>
                    <p>Largo High International Baccalaureate Program</p>
                </section>
            </div>
            <div className="infobox-container">
                <InfoBox title="WHERE" content="Ben T Davis Beach,\ 7740 W Courtney Campbell Causeway,\ Tampa, FL 33607" image="place.png"/>
                <InfoBox title="WHEN" content="May 29\June 12\June 19\June 26\12 PM to 3 PM\Subject to Change*" image="calendar.png"/>
                <InfoBox title="WHY" content="As lifelong residents of Tampa Bay, we want to give back to our community and preserve the natural beauty of Florida's beaches for generations to come." image="question mark.png"/>
            </div>
        </div>
    );
}

export default HomePage;