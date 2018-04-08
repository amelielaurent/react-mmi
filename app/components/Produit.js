/**
 *
 * Produit.js
 *
 */
import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

 
const AnyReactComponent = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'pink',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>;
 
 const MY_API_KEY = "AIzaSyC0YVxszS2xaBSLtw3gOz0kCvFO46tksFw";
 
class Produits extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };
  
   render() {
    return (
      <GoogleMapReact
      bootstrapURLKeys={{ key: [MY_API_KEY] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
        
        
      </GoogleMapReact>
      
    );
   
  }
}
 
export default Produits;

