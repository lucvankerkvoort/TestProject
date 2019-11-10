import React from "react";
import { guide } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";
class Tours extends React.Component {
  state = {
    user: "Guide"
  };
  render() {
    return (
      <div className="tours">
        <div className="guide-background">
          <BackgroundSlideshow images={guide} />
        </div>
      </div>
    );
  }
}

export default Tours;
