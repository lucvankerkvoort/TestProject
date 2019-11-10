import React from "react";
import Search from "../Search";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: "Traveler",
    search: false,
    switched: false
  };
  navbar = {
    traveler: ["Search", "Tours", "Options"],
    guide: ["Availability", "Tours", "Options"]
  };

  componentWillMount = () => {
    if (this.state.user === "Traveler") {
      this.setState({ search: true });
    }
  };

  switch = () => {
    if (!this.state.switched) {
      this.setState({ user: "Guide", switched: true });
    } else {
      this.setState({ user: "Traveler", switched: false });
    }
  };
  render() {
    console.log(this.state.user);
    return (
      <div
        className={this.state.switched ? "navbar background-switch" : "navbar"}
      >
        <div className="navbar-menu">
          {this.state.user === "Traveler"
            ? this.navbar.traveler.map((options, i) => {
                return <p key={i}>{options}</p>;
              })
            : this.navbar.guide.map((options, i) => {
                return <p key={i}>{options}</p>;
              })}
        </div>
        <div className="navbar-switch">
          <Link to={this.state.switched ? "/Traveler" : "/Guide"}>
            <button
              onClick={this.switch}
              id="switch-button"
              className={
                this.state.switched ? "switch background-switch" : "switch"
              }
            ></button>
          </Link>

          <label>{this.state.user}</label>
        </div>
        <div className="navbar-search">
          {this.state.search ? <Search /> : null}
        </div>
      </div>
    );
  }
}

export default NavBar;
