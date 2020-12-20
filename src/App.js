import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [year, setYear] = useState("");
  function leapYear(event) {
    var year = event.target.value;

    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          setYear("leap year");
        } else {
          setYear("not a leap year");
        }
      } else {
        setYear("leap year");
      }
    } else {
      setYear("not a leap year");
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Are you born in leap Year?</h1>
        <div>
          <small>Check it out here</small>
        </div>

        <input
          placeholder="Enter year"
          className="userInput"
          onChange={leapYear}
        ></input>
      </div>
      <div>{year}</div>
    </div>
  );
}
