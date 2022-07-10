import React from "react";
import astrokatMeditate from "../img/astrokatMeditate.png";
const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Astro Kat</h2>
                    </div>
                    <div className="hide">
                        <h2>your neighborhood space cat</h2>
                    </div>
                    <div>Designed by <span>Rika Anjani</span></div>
                </div>
                <p>Explore space with Astro Kat!</p>
                <button>Explore</button>
            </div>
            <div className="image">
                <img src={astrokatMeditate} alt="Astro Kat meditating" />
            </div>

        </div>
    )
}


export default AboutSection;