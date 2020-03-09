import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const Museum = props => {
  let cityMap = props.data.filter(
    town => town.city === props.match.params.name
  );
  console.log(cityMap);
  let museumData = cityMap[0].museums.filter(
    food => food.name === props.match.params.museum
  );
  museumData = museumData[0];
  console.log(museumData);
  return (
    <div className="museum__page">
      <div className="museum__image">
        <img src={cityMap[0].squareImage}></img>
      </div>
      <div className="museum__info">
        <div className="museum__name">{museumData.name}</div>
        <div className="museum__property">
          <span>Type: </span>
          {museumData.type}
        </div>
        <a
          href={`http://www.google.com/search?q=${museumData.name}+${museumData.city}`}
        >
          <div className="museum__button">Learn More</div>
        </a>
      </div>
    </div>
  );
};

export default Museum;
