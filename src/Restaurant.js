import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const Restaurant = props => {
  let cityMap = props.data.filter(
    town => town.city === props.match.params.name
  );
  console.log(cityMap);
  let restaurantData = cityMap[0].restaurants.filter(
    food => food.name === props.match.params.restaurant
  );
  restaurantData = restaurantData[0];
  console.log(restaurantData);
  return (
    <div className="restaurant__page">
      <div className="restaurant__image">
        <img src={cityMap[0].squareImage}></img>
      </div>
      <div className="restaurant__info">
        <div className="restaurant__name">{restaurantData.name}</div>
        <div className="restaurant__property">
          <span>Michelin Stars: </span>
          {restaurantData.michelinStars}
        </div>
        <div className="restaurant__property">
          <span>Cuisine Type: </span>
          {restaurantData.cuisine}
        </div>
        <div className="restaurant__property">
          <span>Price: </span>
          {restaurantData.price}
        </div>
        <a href={restaurantData.url} target="_blank">
          <div className="restaurant__button">Learn More</div>
        </a>
      </div>
    </div>
  );
};

export default Restaurant;
