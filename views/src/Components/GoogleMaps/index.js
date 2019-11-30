import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMaps extends React.Component {
  render() {
    const { location } = this.props;
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDghyfJssa7MLFXErEUs0wMMddeSknuTOQ"
})(GoogleMaps);
