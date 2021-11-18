import { useState } from "react";
import "./styles.css";
import { travelDictionary } from "./dictionarydb.js";

var places = Object.keys(travelDictionary);

export default function App() {
  var [genre, setGenre] = useState("Most_Visited");

  function clickHandler(category) {
    setGenre(category);
  }

  return (
    <div className="App">
      <header className="Header">
        <h1>Travelogy India</h1>
        <h3 style={{ color: "white" }}>
          "Travel is the only thing you buy that makes you richer."
        </h3>
      </header>
      <div>
        {places.map(function (category) {
          return (
            <button
              key="places.name"
              className="btn"
              onClick={() => {
                clickHandler(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div>
        {travelDictionary[genre].map(function (place) {
          return (
            <div className="container" key={place.name}>
              <img className="main" src={place.image} alt="place" />
              <div className="name"> {place.name}</div>
              <div className="location"> {place.location}</div>
            </div>
          );
        })}
      </div>
      <footer className="footer">
        <span className="phone">
          <i class="fa fa-phone" aria-hidden="true">
            +91 8504******
          </i>
        </span>
        <span className="mail">travelogy***@yahoo.com</span>
      </footer>
    </div>
  );
}
