import React from "react";
class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <input
            style={{ width: this.props.width }}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
