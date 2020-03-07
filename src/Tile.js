import React from "react";

function Tile(props) {
  return (
    <div className="tile">
      <div className="tile__text">{props.name}</div>
      <div className="tile__overlay"></div>
      <div
        className="tile__image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
}
export default Tile;
