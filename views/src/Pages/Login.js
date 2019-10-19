import React from "react";
import { traveler } from "../Components/images";
import Registration from "../Components/Registration";
import BackgroundSlideshow from "react-background-slideshow";

class Login extends React.Component {
  state = {
    showRegistration: false
  };

  openRegister = () => {
    this.setState({ showRegistration: true });
  };

  closeRegister = input => {
    this.setState({ showRegistration: input });
  };
  render() {
    return (
      <div className="background">
        <BackgroundSlideshow images={traveler} />
        <div className="login">
          <div className="login-modal">
            <h2>Login</h2>
            <form className="login-form">
              <input className="username" type="text" placeholder="Username" />
              <input
                className="password"
                type="password"
                placeholder="Password"
              />
              <button type="submit" onClick={this.login}>
                Submit
              </button>
            </form>
            <br />
            {this.state.showRegistration ? (
              <Registration closeButton={this.closeRegister} />
            ) : null}
            <p className="registration-link" onClick={this.openRegister}>
              Register Here
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
