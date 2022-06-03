import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards({ links1, links2 }) {
  return (
    <div className="cards">
      <h1>Posts</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {links1.map((card) => (
              <CardItem
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {links2.map((card) => (
              <CardItem
                src={card.src}
                text={card.text}
                label={card.label}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
