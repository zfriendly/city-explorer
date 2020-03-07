import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Tilecontainer from "./Tilecontainer";
import Restaurant from "./Restaurant";
import { Route, Link } from "react-router-dom";
import City from "./City";
import HomeIcon from "@material-ui/icons/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: null,
      ready: false
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(data => this.setState({ cities: data, ready: true }));
  }

  render() {
    if (this.state.ready === false) {
      return <div>Loading!</div>;
    } else {
      return (
        <div className="App">
          <Header />
          <Route
            path="/"
            render={() => <Tilecontainer cityTile={this.state.cities} />}
            exact
          />
          <Route
            path="/city/:name"
            render={routerProps => (
              <City data={this.state.cities} {...routerProps} />
            )}
          />
          <Route
            path="/restaurant/:restaurant"
            render={routerProps => (
              <Restaurant data={this.state.cities} {...routerProps} />
            )}
          />

          <Footer />
        </div>
      );
    }
  }
}
export default App;
