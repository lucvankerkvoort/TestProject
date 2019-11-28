import React from "react";
import BackgroundSlideshow from "react-background-slideshow";
import { traveler } from "../Components/images";
import Search from "../Components/Search";

class SearchPage extends React.Component {
  state = {
    userName: "Luc",
    user: "Traveler"
  };
  render() {
    return (
      <div className="search">
        <div className="guide-background">
          <BackgroundSlideshow images={traveler} />
        </div>
        <div className="search-welcome">
          <h2>Welcome {this.state.userName}</h2>
          <h4>Here you can search for destinations</h4>
        </div>
        <div className="searchbar">
          <Search width="600px" />
        </div>
        <div className="search-filler" />
      </div>
    );
  }
}

export default SearchPage;
