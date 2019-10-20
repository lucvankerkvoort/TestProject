import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="navbar-search">
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
