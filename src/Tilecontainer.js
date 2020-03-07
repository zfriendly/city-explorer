import React from "react";
import Tile from "./Tile";
import { Link } from "react-router-dom";

function Tilecontainer(props) {
  let list = props.cityTile.map(data => (
    <Link to={"/city/" + data.city}>
      <Tile key={data._id} name={data.city} image={data.tileImage}></Tile>
    </Link>
  ));
  return <div className="tile__container">{list}</div>;
}
export default Tilecontainer;
