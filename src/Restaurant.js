import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

function Restaurant(props) {
  console.log(props.data);
  return (
    <a
      href={`http://www.google.com/search?q=${props.data[0].restaurants[0].name}+AND+${props.data[0].city}`}
    >
      Hello World!
    </a>
  );
}
export default Restaurant;
