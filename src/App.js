import React, { useState } from "react";
import "./styles.css";
var recomendation = {
  North: ["Delhi - 4/5 stars", "Amritsar - 4/5stars", "Manali - 5/5stars"],
  South: [
    "Trivandrum - 5/5stars",
    "Chennai - 3/5stars",
    "Hyderabad - 4/5stars"
  ],
  West: ["Mumbai - 4/5stars", "Ahmedabad - 5/5stars", "Surat - 3/5stars"],
  East: ["Kolkata - 3/5stars", "Guwahati - 4/5stars", "Sikkim - 5/5stars"]
};
var directionList = Object.keys(recomendation);

export default function App() {
  var [list, setList] = useState(recomendation["South"]);
  function clickHandler(direction) {
    var list = recomendation[direction];
    setList(list);
  }

  return (
    <div className="App">
      <h1>TrAveLeRs GuIde🗺️</h1>
      <h2>My travelers guide for new Travelers</h2>
      <h2>Select a direction an go TRAVEL!!!</h2>
      {directionList.map(function (direction) {
        return (
          <span
            id="span"
            onClick={() => clickHandler(direction)}
            key={direction}
          >
            {" "}
            {direction}{" "}
          </span>
        );
      })}

      <ul>
        {list.map(function (direction) {
          return (
            <li id="list" key={direction}>
              {" "}
              {direction}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
