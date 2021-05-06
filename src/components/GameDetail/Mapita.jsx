/* import useSwr from "swr"; */
import GoogleMapReact from "google-map-react";
/* import useSupercluster from "use-supercluster"; */
import ".//mapita.css";

const Mapita = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_KEY }}
        defaultCenter={{ lat: 40.4167, lng: -3.70325 }}
        defaultZoom={10}
      ></GoogleMapReact>
    </div>
  );
};

export default Mapita;
