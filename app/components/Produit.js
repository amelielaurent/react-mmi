import React, { Component } from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) =>  <div style={{
    position: 'relative', color: 'white', background: '#F59238',
    height: 50, width: 60, top: -20, left: -30, padding: 10,   
  }}>
    {text}
  </div>;

class Produit extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBU_IEeDtk0fIKfm18yj8bD6DDaJ0N-3e4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.95}
            lng={30.33}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Produit;