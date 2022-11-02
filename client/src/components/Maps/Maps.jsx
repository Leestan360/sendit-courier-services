import React from "react";
// import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"

const center = { lat: 48.8584, lng: 2.2945 }


const Maps = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyB2Ect31W8zHuQ76j4WRnQkQCEzWTLmlcU"
  })


  // const defaultProps = {
  //   center: {
  //     lat: -1.283441,
  //     lng: 36.814386,
  //   },
  //   zoom: 12,
  // };

  if(!isLoaded){
    return <h2>Loading...</h2>
  }

  return (
    <div className="max-w-[1400px] w-[100%] h-[500px]">
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB2Ect31W8zHuQ76j4WRnQkQCEzWTLmlcU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={-1.283441} lng={36.814386} text="My Marker" />
      </GoogleMapReact> */}
      <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{width: '100%', height: "100%"}}
      options={{
        zoomControl:false,
        streetViewControl:false,
        fullscreenControl:false,
        mapTypeControl:false,
      }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

// export default Maps;
