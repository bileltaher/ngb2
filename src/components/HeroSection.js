import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/TurtleVideo.mp4" autoPlay loop muted />
      <h1>NOTRE GRAND BLEU</h1>
      <p>Let's be the saving eye of our Big Blue</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Who are we?
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
