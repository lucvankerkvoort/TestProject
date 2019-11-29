import React from "react";
import {
  traveler,
  europe,
  northAmerica,
  asia,
  southAmerica,
  oceania,
  africa,
  stars
} from "../Components/images";
import BackgroundSlideshow from "react-background-slideshow";

class Traveler extends React.Component {
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
      <div className="traveler">
        <div className="traveler-background">
          <BackgroundSlideshow images={traveler} />
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
        <div className="traveler-general">
          <div className="countries-left">
            <h2 className="continent">Europe</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel1Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {europe.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            key={i + 2}
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p key={i + 3} className="tagline-carousel">
                            {city.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel1Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel1Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {europe.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p key={i + 1}>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filler-right" />
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="filler-left" />
          <div className="countries-right">
            <h2 className="continent">Asia</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel2Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {asia.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            key={i + 4}
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p key={i + 5} className="tagline-carousel">
                            {city.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel2Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel2Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {asia.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p key={i + 1}>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="countries-left">
            <h2 className="continent">North America</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel3Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {northAmerica.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p className="tagline-carousel">{city.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel3Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel3Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {northAmerica.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filler-right" />
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="filler-left" />
          <div className="countries-right">
            <h2 className="continent">South America</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel4Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {southAmerica.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p className="tagline-carousel">{city.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel4Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel4Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {southAmerica.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="countries-left">
            <h2 className="continent">Oceania</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel5Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {oceania.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p className="tagline-carousel">{city.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel5Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel5Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {oceania.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filler-right" />
        </div>
        <div className="traveler-footer" />
        <div className="traveler-general">
          <div className="filler-left" />
          <div className="countries-right">
            <h2 className="continent">Africa</h2>
            <div className="country-list">
              <div id="mobile">
                <div
                  id="carousel6Controls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {africa.map((city, i) => {
                      return (
                        <div
                          key={i}
                          className={city.class ? city.class : "carousel-item"}
                        >
                          <img
                            className="d-block w-100"
                            src={city.picture}
                            height="250px"
                            alt={i}
                          />
                          <p className="tagline-carousel">{city.name}</p>
                        </div>
                      );
                    })}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel6Controls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel6Controls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {africa.map((city, i) => {
                const divStyle = {
                  background: `url(${city.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                };
                return (
                  <div key={i} className="country" style={divStyle}>
                    <p>{city.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="traveler-footer" />
      </div>
    );
  }
}

export default Traveler;
