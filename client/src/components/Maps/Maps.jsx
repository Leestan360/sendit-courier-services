import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Maps = () => {
  const defaultProps = {
    center: {
      lat: -1.283441,
      lng: 36.814386,
    },
    zoom: 12,
  };

  return (
    <div className="max-w-[1400px] w-[100%] h-[500px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB2Ect31W8zHuQ76j4WRnQkQCEzWTLmlcU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={-1.283441} lng={36.814386} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
