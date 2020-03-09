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
        <div className="restaurant__property">Michelin Stars</div>
        <div className="restaurant__stars"> {restaurantData.michelinStars}</div>
        <div className="restaurant__property">Type of Cuisine</div>
        <div className="restaurant__cuisine">{restaurantData.cuisine}</div>
        <div className="restaurant__property">Price</div>
        <div className="restaurant__property">{restaurantData.price}</div>
        <div className="restaurant__property">Michelin Stars</div>
        <div className="restaurant__property">Michelin Stars</div>
      </div>
    </div>
  );
};

export default Restaurant;
