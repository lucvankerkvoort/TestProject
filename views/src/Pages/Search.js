import React from "react";
import BackgroundSlideshow from "react-background-slideshow";
import { traveler } from "../Components/images";
import Search from "../Components/Search";
import Map from "../Components/GoogleMaps";

class SearchPage extends React.Component {
  state = {
    userName: "Luc",
    user: localStorage.getItem("user")
  };
  render() {
    return (
      <div className="search">
        <div className="guide-background">
          <BackgroundSlideshow images={traveler} />
        </div>
        <div className="google-maps">
          <Map
            google={this.props.google}
            center={{ lat: 47.444, lng: -122.176 }}
            height="500px"
            zoom={10}
          />
        </div>
        <div className="search-welcome">
          <h3>Here You Can Search for Destinations</h3>
        </div>
        <div className="searchbar">
          <Search width="100%" />
        </div>
        <div className="search-filler" />
      </div>
    );
  }
}

export default SearchPage;
