import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

function City(props) {
  console.log(props.match.params);
  let cityMap = props.data.map(place => {
    if (props.match.params.name === place.city) {
      let attractions = place.museums.map(museum => {
        return (
          <Link to={`/city/${place.city}/museum/` + museum.name}>
            <div className="attractions__card">{museum.name}</div>
          </Link>
        );
      });
      let food = place.restaurants.map(restaurant => {
        return (
          <Link to={`/city/${place.city}/restaurant/` + restaurant.name}>
            <div className="attractions__card">{restaurant.name}</div>
          </Link>
        );
      });
      return (
        <div className="city__page">
          <div className="city__image">
            <img src={place.squareImage}></img>
          </div>
          <div className="restaurants">
            <div className="restaurants__header">
              <div className="city__name">
                Michelin Star Restaurants in {place.city}
              </div>
              <div className="city__scroll">Scroll for more options!</div>
            </div>
            <div className="attractions__container">{food}</div>
          </div>
          <div className="museums">
            <div className="city__name">
              Museums, Parks and More in {place.city}
            </div>
            <div className="city__scroll">Scroll for more options!</div>
            <div className="attractions__container">{attractions}</div>
          </div>
        </div>
      );
    }
  });
  return <div>{cityMap}</div>;
}
export default City;
