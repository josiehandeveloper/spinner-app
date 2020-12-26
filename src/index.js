import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const CONTENT = [
  {
    contentType: "movie",
    title: "AVA",
    genre: "action",
    image:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
  },
  { contentType: "movie", title: "Naruto", genre: "anime" },
  { contentType: "movie", title: "Project Power", genre: "blackStories" },
  { contentType: "movie", title: "Canvas", genre: "children&family" },
  {
    contentType: "movie",
    title: "One Flew Over The Cuckoo's Nest",
    genre: "classics",
  },
  { contentType: "movie", title: "Always Be My Maybe", genre: "comedies" },
  { contentType: "movie", title: "Nocturnal Animals", genre: "crime" },
  { contentType: "movie", title: "Kung Fu Hustle", genre: "cult" },
  {
    contentType: "movie",
    title: "Diana In Her Own Words",
    genre: "documentaries",
  },
  { contentType: "movie", title: "The Help", genre: "drama" },
  {
    contentType: "movie",
    title: "The Gospel of Luck",
    genre: "faith&spirituality",
  },
  { contentType: "movie", title: "Stardust", genre: "fantasy" },
  { contentType: "movie", title: "A California Christmas", genre: "holidays" },
  { contentType: "movie", title: "Don't Listen", genre: "horror" },
  { contentType: "movie", title: "Fargo", genre: "independent" },
  { contentType: "movie", title: "The Call", genre: "international" },
  { contentType: "movie", title: "PROM", genre: "lgbtq" },
  {
    contentType: "tvshow",
    title: "Alice In Borderland",
    genre: "international",
  },
  { contentType: "tvshow", title: "Record of Youth", genre: "k-dramas" },
  { contentType: "tvshow", title: "The Legend of Korra", genre: "kids" },
  { contentType: "tvshow", title: "Glee", genre: "lgbtq" },
  { contentType: "tvshow", title: "The Break", genre: "mysteries" },
  { contentType: "tvshow", title: "Ink Master", genre: "reality" },
  { contentType: "tvshow", title: "Virgin River", genre: "romance" },
  { contentType: "tvshow", title: "Black Mirror", genre: "sci-fi&fantasy" },
  {
    contentType: "tvshow",
    title: "The Surgeon's Cut",
    genre: "science&nature",
  },
  { contentType: "tvshow", title: "Monarca", genre: "spanish-language" },
  { contentType: "tvshow", title: "Patriot Act", genre: "stand-up&talkshows" },
  { contentType: "tvshow", title: "Atypical", genre: "teen" },
  { contentType: "tvshow", title: "Mindhunter", genre: "thriller" },
];

ReactDOM.render(<App content={CONTENT} />, document.getElementById("root"));
