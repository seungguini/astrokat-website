import React from "react";
import astrokatMeditate from "../img/astrokatMeditate.png";
// Styled Components
import styled from "styled-components";


const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
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
            </StyledDescription>
            <div className="image">
                <img src={astrokatMeditate} alt="Astro Kat meditating"/>
            </div>
        </StyledAbout>
    )
}

// Styled Components
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`

export default AboutSection;