import React from "react";
import { guide, traveler } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";
class Tours extends React.Component {
  state = {
    user: "Guide"
  };
  render() {
    return (
      <div className="tours">
        <div className="guide-background">
          <BackgroundSlideshow
            images={this.state.user === "Guide" ? guide : traveler}
          />
        </div>
        <div className="tours-welcome">
          <h2>Here You Can Check Your Active Tours</h2>
        </div>
        <div className="tours-main">
          <div className="main-filler-left" />
          <div className="tours-section">
            <div className="tour">
              <div className="mini-profile"></div>
              <p>Name</p>
              <p>dates</p>
            </div>
            <div className="tour">
              <div className="mini-profile"></div>
              <p>Name</p>
              <p>dates</p>
            </div>
            <div className="tour">
              <div className="mini-profile"></div>
              <p>Name</p>
              <p>dates</p>
            </div>
          </div>
          <div className="main-filler-right" />
        </div>
        <div className="tours-filler"></div>
      </div>
    );
  }
}

export default Tours;
