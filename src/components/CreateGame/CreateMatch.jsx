import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { postCreateMatch } from "../../services/GameService";
import { getMatch } from "../../services/GameService";
import "./CreateMatch.css";
import MapaForm from "./MapaForm";
import GoogleMapReact from "google-map-react";
import image from "../GameDetail/images/ball (1).svg";

import FormCreateMatch from "./FormCreateMatch";

const Marker = ({ children }) => children;
const containerStyle = {
  width: "550px",
  height: "100px",
};

export default function CreateMatch() {
  const { id } = useParams();
  const { push } = useHistory();
  const [match, setMatch] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(() => {
    getMatch(id).then((match) => setMatch(match));
  }, [id]);

  const onChange = (event) => {
    setMatch((old) => {
      let value = event.target.value;
      if (event.target.type === "file") {
        value = event.target.files[0];
      } else if (event.target.tagName === "SELECT") {
        value = [...event.target.selectedOptions].map((o) => o.value);
      }
      return { ...old, [event.target.id]: value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(match).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("latitude", location.lat);
    formData.append("longitude", location.lng);

    
    postCreateMatch(formData)
      .then(() => {
        push("/");
      })
      .catch((e) => {
        if (e.response.status === 400) {
          setErrors(e.response.data.errors);
        }
      });
  };

  const [location, setLocation] = useState({});

  const handleClickMap = (location) => {
    const lat = location.lat;
    const lng = location.lng;
    console.log("onClick map: ", lat, lng);
    console.log(location.lat);
    setLocation({ lat, lng });
  };

  return (
    <>
    <div className="shownavbar"></div>
      <form onSubmit={onSubmit} className="container">
        <FormCreateMatch
          name="name"
          id="name"
          onChange={onChange}
          error={errors.name}
        />
        <FormCreateMatch
          name="address"
          id="address"
          onChange={onChange}
          error={errors.description}
        />
        <FormCreateMatch
          name="image"
          id="image"
          onChange={onChange}
          error={errors.image}
          type="file"
        />
        <FormCreateMatch
          name="price"
          id="price"
          onChange={onChange}
          error={errors.image}
          type="number"
        />{" "}
        <FormCreateMatch
          name="date"
          id="date"
          onChange={onChange}
          error={errors.image}
          type="datetime-local"
        />
        <FormCreateMatch
          name=""
          id="location"
          error={errors.image}
          value={location.lat}
          type="hidden"
        />
        <FormCreateMatch
          name=""
          id="location"
          error={errors.image}
          value={location.lng}
          type="hidden"
        />
        <button type="submit" className="btn btn-primary mt-3 but-create">
          Create
        </button>
      </form>
      <div className="container mapbox ">
        <h1>Click Your Location</h1>
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
            <Marker lat={location.lat} lng={location.lng} className="p-0">
              <button className="p-0">
                <img src={image} alt="ballMark" />
              </button>
            </Marker>
          </GoogleMapReact>

          <h3>
            You clicked: Latitud: {location.lat}, Longitud: {location.lng}
          </h3>
        </div>
      </div>
    </>
  );
}
