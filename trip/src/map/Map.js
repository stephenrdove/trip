import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = props => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 42.36, lng: -71.044 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 42.36, lng: -71.044 }} />
      )}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MyMapComponent));
