import * as React from "react";
import "./SelectedPost.css";

export default function SelectedPost({ title, description, image, date }) {
  const MONTH_MAP = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderedDate = new Date(date);
  return (
    <>
      <article class="card">
        <div class="card__media">
          <img
            src={window.location.origin + "/uploads/posts/" + image}
            alt="SelectedPost"
          />
          <div class="card__date">
            <span class="date--day">{renderedDate.getDay()}</span>
            <span class="date--month">
              {MONTH_MAP[renderedDate.getMonth()]}
            </span>
          </div>
          <span class="card__category">Photos</span>
        </div>

        <div class="card__content">
          <header class="card__header">
            <h2 class="card__title">{title}</h2>
            <div class="card__subtitle">{title}</div>
          </header>
          <p class="card__excerpt">{description}</p>
        </div>
      </article>
      <br />
    </>
  );
}
