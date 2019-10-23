import React from "react";
import NavBar from "../Components/NavBar";
import { traveler } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";

class Traveler extends React.Component {
  state = {
    userName: "Luc"
  };
  render() {
    return (
      <div className="traveler">
        <NavBar />
        <div className="traveler-background">
          <BackgroundSlideshow images={traveler} />
        </div>
        <div className="traveler-welcome">
          <div className="welcome-message">
            <h2>Welcome {this.state.userName}</h2>
            <p>You can find all of your info below</p>
          </div>
        </div>
        <div className="traveler-general">
          <div className="countries-left">
            <h2 className="continent">Europe</h2>
            <div className="country-list">
              <div id="mobile" className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
            </div>
          </div>
          <div className="filler-right"></div>
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="filler-left"></div>
          <div className="countries-right">
            <h2 className="continent">Asia</h2>
            <div className="country-list">
              <div id="mobile" className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
            </div>
          </div>
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="countries-left">
            <h2 className="continent">The Americas</h2>
            <div className="country-list">
              <div id="mobile" className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
              <div className="country" />
            </div>
          </div>
          <div className="filler-right"></div>
        </div>
        <div className="traveler-footer" />
      </div>
    );
  }
}

export default Traveler;
