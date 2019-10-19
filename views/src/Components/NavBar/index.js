import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-menu">
          <p>Search</p>
          <p>Tours</p>
          <p>Options</p>
        </div>
        <div className="navbar-search">
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default NavBar;
