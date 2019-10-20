import React from "react";
import Search from "../Search";

class NavBar extends React.Component {
  state = {
    user: "traveler",
    search: false
  };
  navbar = {
    traveler: ["Search", "Tours", "Options"],
    guide: ["Availability", "Tours", "Options"]
  };

  componentWillMount = () => {
    if (this.state.user === "traveler") {
      this.setState({ search: true });
    }
  };

  render() {
    return (
      <div className="navbar">
        <div className="navbar-menu">
          {this.state.user === "traveler"
            ? this.navbar.traveler.map(options => {
                return <p>{options}</p>;
              })
            : this.navbar.guide.map(options => {
                return <p>{options}</p>;
              })}
        </div>
        {this.state.search ? <Search /> : null}
      </div>
    );
  }
}

export default NavBar;
