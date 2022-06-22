import * as React from "react";
import "./SelectedPost.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export default function SelectedPost({ title, description, image, date }) {
  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");
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
            src={"https://notregrandbleu.org/assets/img/posts/" + image}
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

          <footer class="card__category" role="contentinfo">
            <span class="card__post-date">
              {timeAgo.format(Date.now() - renderedDate.getTime() / 1000)}
            </span>
          </footer>
        </div>
      </article>
      <br />
    </>
  );
}
