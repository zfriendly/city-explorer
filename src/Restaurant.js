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
  return <div className="restaurant__page">{restaurantData.name}</div>;
};

export default Restaurant;
