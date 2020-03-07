import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

function City(props) {
  console.log(props.match.params);
  let cityMap = props.data.map(place => {
    if (props.match.params.name === place.city) {
      let attractions = place.museums.map(museum => {
        return <li>{museum.name}</li>;
      });
      let food = place.restaurants.map(restaurant => {
        return (
          <Link to={"/restaurant/" + restaurant.name}>
            <div className="restaurant__card">{restaurant.name}</div>
          </Link>
        );
      });
      return (
        <div className="city__page">
          <div className="city__left">
            <img src={place.squareImage}></img>
          </div>
          <div className="city__right">
            <div className="city__name">
              Michelin Star Restaurants in {place.city}
            </div>
            <div className="restaurant__container">{food}</div>
          </div>
        </div>
      );
    }
  });
  return <div>{cityMap}</div>;
}
export default City;
