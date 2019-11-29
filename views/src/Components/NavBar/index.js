import React from "react";
import Search from "../Search";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    user: localStorage.getItem("user"),
    search: false,
    switched: JSON.parse(localStorage.getItem("switched"))
  };
  navbar = {
    traveler: ["Traveler", "Search", "Tours", "Options"],
    guide: ["Guide", "Availability", "Tours", "Options"]
  };
  componentDidMount = () => {
    if (this.state.user === "Traveler") {
      this.setState({ search: true });
    }
  };

  switch = () => {
    if (!this.state.switched) {
      const boolean = true;
      localStorage.setItem("user", "Guide");
      localStorage.setItem("switched", JSON.stringify(boolean));
      this.setState({ user: "Guide", switched: true });
    } else {
      const boolean = false;
      localStorage.setItem("user", "Traveler");
      localStorage.setItem("switched", JSON.stringify(boolean));
      this.setState({ user: "Traveler", switched: false });
    }
  };
  render() {
    console.log(typeof this.state.switched);
    console.log(typeof this.state.user);
    return (
      <div
        className={this.state.switched ? "navbar background-switch" : "navbar"}
      >
        <div className="navbar-menu">
          {this.state.user === "Traveler"
            ? this.navbar.traveler.map((options, i) => {
                return (
                  <Link key={i} to={"/" + options}>
                    <p
                      onClick={this.option}
                      className="navbar-traveler"
                      key={i}
                    >
                      {options}
                    </p>
                  </Link>
                );
              })
            : this.navbar.guide.map((options, i) => {
                return (
                  <Link key={i} to={"/" + options}>
                    <p onClick={this.option} className="navbar-guide" key={i}>
                      {options}
                    </p>
                  </Link>
                );
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
