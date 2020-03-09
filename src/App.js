import React, { Component } from "react";
import "./App.css";
import "./City.css";
import "./Restaurant.css";
import "./Museum.css";
import Header from "./Header";
import Footer from "./Footer";
import Tilecontainer from "./Tilecontainer";
import Restaurant from "./Restaurant";
import Museum from "./Museum";
import { Route, Link } from "react-router-dom";
import City from "./City";
// https://michelin-city-explorer.herokuapp.com/
class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: null,
      ready: false,
      rootUrl: window.location.origin
    };
  }
  componentDidMount() {
    fetch("https://michelin-city-explorer.herokuapp.com/")
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
            exact
            render={routerProps => (
              <City data={this.state.cities} {...routerProps} />
            )}
          />
          <Route
            path="/city/:name/restaurant/:restaurant"
            exact
            render={routerProps => (
              <Restaurant data={this.state.cities} {...routerProps} />
            )}
          />
          <Route
            path="/city/:name/museum/:museum"
            exact
            render={routerProps => (
              <Museum data={this.state.cities} {...routerProps} />
            )}
          />

          <Footer />
        </div>
      );
    }
  }
}
export default App;
