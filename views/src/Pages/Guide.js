import React from "react";
import NavBar from "../Components/NavBar";
import { guide, stars } from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";

class Guide extends React.Component {
  state = {
    userName: "Luc",
    rating: 3
  };

  componentDidMount() {
    const rating = document.getElementById("rating");
    let picture;
    for (let i = 0; i < 5; i++) {
      const ratingStars = document.createElement("img");
      ratingStars.setAttribute("class", "stars");

      if ([i] < this.state.rating) {
        picture = stars[1];
      } else {
        picture = stars[0];
      }
      ratingStars.setAttribute("src", picture);
      rating.append(ratingStars);
    }
  }
  render() {
    return (
      <div className="guide">
        <div className="guide-background">
          <BackgroundSlideshow images={guide} />
        </div>
        <div className="guide-welcome">
          <img
            className="profile-pic"
            src="https://via.placeholder.com/150"
            width="150px"
            height="150px"
            alt="placeholder"
          />

          <div className="welcome-message">
            <div id="rating" />
            <h2>Welcome {this.state.userName}</h2>
            <p>You can find all of your info below</p>
          </div>
        </div>
        <div id="section1" className="guide-section">
          <div id="guide-reservations" className="guide-reservations">
            <h3>Next Reservation</h3>
            <div id="guide-upcoming" className="guide-upcoming">
              <div className="guide-profile-icon">
                <img src="https://via.placeholder.com/60" alt="profile-icon" />
              </div>
              <div className="guide-name">
                <p>Luc van Kerkvoort</p>
              </div>
              <div className="guide-dates">
                <p>From: 11/06/2019 </p> <p> Till: 11/16/2019</p>
              </div>
            </div>
          </div>
        </div>
        <div id="filler1" className="guide-filler" />
        <div id="section2" className="guide-section">
          <div
            onClick={this.clickChange}
            id="mobile-reviews"
            className="guide-reviews"
          >
            <h3>Reviews</h3>
          </div>

          <div id="mobile-upcoming" className="upcoming-reservations">
            <h3>Upcoming Reservations</h3>
          </div>
          <div id="mobile-statistics" className="guide-statistics">
            <h3>Statistics</h3>
            <div className="guide-stats">
              <p>Rating: {this.state.rating}</p>
              <p>Completed Tours: </p>
              <p>Reviews: </p>
              <p>Tours: </p>
            </div>
          </div>
        </div>
        <div id="filler2" className="guide-filler" />
      </div>
    );
  }
}

export default Guide;
