import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./ImageSlider.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Posts</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/nousrec.png"
              text="Call for applications"
              label="Applications"
              path="/services"
            />
            <CardItem
              src="images/img-off.jpg"
              text="Call for offers"
              label="Applications"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/202212515117.jpg"
              text="Winter Count of Seabirds on the Kuriat Islands"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/202121113028.jpg"
              text="Kuriat: an island adventure in the Mediterranean"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/4864531.jpg"
              text="Let's not forget about the turtles!"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      <h1>The 7 Species of Sea Turtle</h1>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Cards;
