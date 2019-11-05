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
        <NavBar />
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

          <div id="rating" className="rating" />
          <h2>Welcome {this.state.userName}</h2>
          <p>You can find all of your info below</p>
        </div>
        <div id="section1" className="guide-section">
          <div className="guide-reservations">
            <h3>Upcoming Reservations</h3>
          </div>
        </div>
        <div id="filler1" className="guide-filler" />
        <div id="section2" className="guide-section" />
        <div id="filler2" className="guide-filler" />
      </div>
    );
  }
}

export default Guide;
