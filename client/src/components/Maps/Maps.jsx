import React from "react";
// import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"

const center = { lat: 48.8584, lng: 2.2945 }


const Maps = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyB2Ect31W8zHuQ76j4WRnQkQCEzWTLmlcU"
  })

  if(!isLoaded){
    return <h2>Loading...</h2>
  }

  return (
    <div className="max-w-[1400px] w-[100%] h-[500px]">
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
