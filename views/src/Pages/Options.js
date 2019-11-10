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
      </div>
    );
  }
}

export default Options;
