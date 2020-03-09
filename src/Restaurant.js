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

// function Restaurant(props) {
//   console.log(props.match.params);
//   let cityMap = props.data.map(place => {
//     if (props.match.params.name === place.city) {
//       let food = place.restaurants.map(restaurant => {
//         return <div className="restaurant__page">{restaurant.name}</div>;
//       });
//       return <div>{food}</div>;
//     }
//   });
//   return <div>{cityMap}</div>;
// }

export default Restaurant;
