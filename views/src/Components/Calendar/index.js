import React from "react";

class Calendar extends React.Component {
  render() {
    return (
      <div className="Calendar">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Calendar;

// Here we will create a Calendar which we can use to set dates
// We will be using an NPM package for this and style this to match the Website
// This will be used in multiple Pages therefore styling will be done on the Pages itself

// We will have to convert and save the dates into localStorage and send these over to the necessary Pages
