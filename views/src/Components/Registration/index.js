import React from "react";

class Registration extends React.Component {
  handleClick = () => {
    this.props.closeButton(false);
  };
  render() {
    return (
      <div className="registration">
        <div className="registration-modal">
          <p className="close" onClick={this.handleClick}>
            close
          </p>
        </div>
      </div>
    );
  }
}

export default Registration;
