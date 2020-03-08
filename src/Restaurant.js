import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const Restaurant = props => {
  let restaurantData = props.data.filter(
    datum => datum.id === props.match.params.id
  );
  console.log(restaurantData);
  return <div>Restaurant Data</div>;
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
