import React from "react";
import { guide } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";
class Availability extends React.Component {
  render() {
    return (
      <div className="availability">
        <div className="availability-background">
          <BackgroundSlideshow images={guide} />
        </div>
        <div className="availability-welcome">
          <h2>Here You Can Change Your Availability</h2>
        </div>
        <div className="availability-calendar">
          <div id="availability-calendar" className="calendar"></div>
        </div>
        <div className="availability-filler" />
        <div className="availability-user">
          <h2>Users Availability</h2>
          <div className="availability-dates">
            Oct/12/2019 | Oct/18/2019 <p>x</p>
          </div>
        </div>
        <div className="availability-filler" />
      </div>
    );
  }
}

export default Availability;
