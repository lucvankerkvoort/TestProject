import React from "react";
import { guide } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";
class Options extends React.Component {
  state = {
    user: "Guide"
  };
  render() {
    return (
      <div className="options">
        <div className="guide-background">
          <BackgroundSlideshow images={guide} />
        </div>
        <div className="options-welcome">
          <h2>Here You Can Change Your Information</h2>
        </div>
        <div className="main-options">
          <div className="main-filler-left" />
          <div className="main-section"></div>
          <div className="main-filler-right" />
        </div>
        <div className="options-filler" />
      </div>
    );
  }
}

export default Options;
