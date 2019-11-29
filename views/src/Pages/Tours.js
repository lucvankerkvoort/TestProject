import React from "react";
import { guide, traveler } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";
class Tours extends React.Component {
  state = {
    user: localStorage.getItem("user")
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
          <h3>Here You Can Check Your Active Tours</h3>
        </div>
        <div className="tours-main">
          {this.state.user === "Guide" ? (
            <div className="tours-section background-guide">
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
          ) : (
            <div className="tours-section background-traveler">
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
          )}
        </div>
        <div className="tours-filler"></div>
      </div>
    );
  }
}

export default Tours;
