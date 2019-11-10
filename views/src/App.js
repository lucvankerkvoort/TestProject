import React from "react";
import Login from "./Pages/Login";
import Traveler from "./Pages/Traveler";
import Navbar from "./Components/NavBar";
import Guide from "./Pages/Guide";
import Tours from "./Pages/Tours";
import Options from "./Pages/Options";
import Availability from "./Pages/Availability";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/Traveler"
          render={i => {
            return (
              <div key={i}>
                <Navbar />
                <Traveler />
              </div>
            );
          }}
        />
        <Route
          path="/Guide"
          render={i => {
            return (
              <div key={i}>
                <Navbar />
                <Guide />
              </div>
            );
          }}
        />
        <Route
          path="/Tours"
          render={i => {
            return (
              <div key={i}>
                <Navbar />
                <Tours />
              </div>
            );
          }}
        />
        <Route
          path="/Options"
          render={i => {
            return (
              <div key={i}>
                <Navbar />
                <Options />
              </div>
            );
          }}
        />
        <Route
          path="/Availability"
          render={i => {
            return (
              <div key={i}>
                <Navbar />
                <Availability />
              </div>
            );
          }}
        />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
