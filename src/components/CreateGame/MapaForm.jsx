import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import image from "../GameDetail/images/ball (1).svg";

const Marker = ({ children }) => children;
const containerStyle = {
  width: "550px",
  height: "100px",
};

const MapaForm = () => {
  const [location, setLocation] = useState({});

  const handleClickMap = (location) => {
    const lat = location.lat;
    const lng = location.lng;
    console.log("onClick map: ", lat, lng);
    console.log(location.lat);
    setLocation({ lat, lng });
  };

  console.log(handleClickMap.location);
  return (
    <div
      className="container mapDetailGame"
      style={{ height: "300px", width: "100%" }}
    >
      <GoogleMapReact
        mapContainerStyle={containerStyle}
        onClick={(location) => handleClickMap(location)}
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_KEY }}
        defaultCenter={{
          lat: 40,
          lng: -3,
        }}
        defaultZoom={17}
      >
        <Marker lat={40} lng={-3} className="p-0">
          <button className="crime-marker p-0">
            <img src={image} alt="ballMark" />
          </button>
        </Marker>
      </GoogleMapReact>

      <h3>You clicked: {location.lat},</h3>
    </div>
  );
};

export default MapaForm;
