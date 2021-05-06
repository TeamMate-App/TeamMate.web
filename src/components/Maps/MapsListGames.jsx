import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '550px',
  height: '1000px'
};

const center = {
  lat: 40.4167,
  lng: -3.70325
};

function MyComponent() {
console.log(process.env.REACT_APP_G_MAPS_KEY)
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_G_MAPS_KEY
  })

  const [map, setMap] = React.useState(null, center)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

















// import React from 'react' 
// import {GoogleMapReact} from 'google-map-react'
// 
// 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//  
// class SimpleMap extends Component {
//   static defaultProps = {
    // center: {
    //   lat: 59.95,
    //   lng: 30.33
    // },
    // zoom: 11
//   };
//  
//   render() {
    // return (
    //   Important! Always set the container height explicitly
    //   <div style={{ height: '100vh', width: '100%' }}>
        {/* <GoogleMapReact */}
        //   bootstrapURLKeys={{ key:`${process.env.G_MAPS_KEY}` }}
        //   defaultCenter={10}
        //   defaultZoom={{lat: 40.4167, lng: -3.70325}}
        // >
          {/* <AnyReactComponent */}
            // lat={59.955413}
            // lng={30.337844}
            // text="My Marker"
        //   />
        {/* </GoogleMapReact> */}
      {/* </div> */}
    // );
//   }
// }
//  
// export default SimpleMap;










// import React from 'react'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
// 
// 
// function Map() {
    // return (
        // <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.4167, lng: -3.70325 }} />
    // )
// }
// 
// const WrappedMap = withScriptjs(withGoogleMap(Map));
// 
// export default function MapsListGames() {
    // return (
        // <div style={{width:'400px', height: '400px'}}>
            {/* <WrappedMap */}
                // googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.G_MAPS_KEY}`}
                // loadingELement={<div style={{ height: "100%" }} />}
                // containerELement={<div style={{ height: "100%" }} />}
                // mapELement={<div style={{ height: "100%" }} />}   
            // />
        {/* </div> */}
// 
    // );
// }