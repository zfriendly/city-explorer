import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="empty__header top"></div>
      <div className="header_title">City Explorer</div>
      <div className="home__icon">
        <Link to={"/"}>
          <HomeIcon fontSize="large" color="white" />
        </Link>
      </div>
    </div>
  );
}
export default Header;
