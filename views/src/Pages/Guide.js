import React from "react";
import NavBar from "../Components/NavBar";
import { guide } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";

class Guide extends React.Component {
  state = {
    userName: "Luc"
  };
  render() {
    return (
      <div className="guide">
        <NavBar />
        <div className="guide-background">
          <BackgroundSlideshow images={guide} />
        </div>
        <div className="guide-welcome">
          <h2>Welcome {this.state.userName}</h2>
          <p>You can find all of your info below</p>
        </div>
        <div className="guide-general"></div>
        <div className="guide-footer"></div>
      </div>
    );
  }
}

export default Guide;
