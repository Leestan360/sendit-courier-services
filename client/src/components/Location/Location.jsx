import { useNavigate } from "react-router-dom";
import { setOrderList } from "../../features/orderList";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer
} from "@react-google-maps/api";
import Maps from "../Maps/Maps";

const center = { lat: -1.286389, lng: 36.817223 };

const Location = () => {
  const [ map, setMap ] = useState(/** @type google.maps.Map */ (null));
  const [ direction, setDirection ] = useState(null);
  const [ distance, setDistance ] = useState('');
  const [ duration, setDuration ] = useState('');
  const [ pickup, setPickup ] = useState('');
  const [ dropoff, setDropoff ] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const option = useSelector((state) => state.orderList.value);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB2Ect31W8zHuQ76j4WRnQkQCEzWTLmlcU",
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <h2>Not loaded</h2>;
  }

  const calculateRoute = async ()=>{
    if(originRef.current.value === '' || destinationRef.current.value === ''){
      return 
    }
    /* eslint-disable */ 
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING
    })
    // console.log(results);
    setDirection(results);
    setPickup(results['request']['origin']['query'])
    // console.log(results['request']['origin']['query']);
    setDropoff(results['request']['destination']['query'])
    // console.log(results['request']['destination']['query']);
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  const clearRoute = () =>{
    setDirection(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }
  
  const handleNavigate = () => {
    dispatch(setOrderList({ ...option, pickup_location: pickup, delivery_location: dropoff, expected_time: duration}));
    navigate("/payment");
  };

  const handleCancel = () => {
    dispatch(setOrderList({}));
    navigate("/delivery");
  };

  // const handleInput = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   dispatch(setOrderList({ ...option, [name]: value }));
  //   // setOption({ ...option, [name]:value});
  //   console.log(option);
  // };

  const handlePickup = () =>{
    const name = event.target.name;
    // console.log(option);
  }

  const handleDropoff = () =>{
    const name = event.target.name;
    // dispatch(setOrderList({ ...option, [name]: dropoff}));
    // console.log(option);
  }

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">
        Delivery Location
      </h2>
      <hr className="mx-5 my-2 border" />
      <div className="flex justify-around">
        <div className="bg-white mx-5 w-[100%] shadow-lg p-5 rounded-md">
          <div className="flex flex-col md:flex-row justify-around mt-[10px]">
            <div className="">
              <label htmlFor="pickup_location" className="font-work">
                Choose Pickup Location
              </label>
              <Autocomplete>
                <input
                  name="pickup_location"
                  onChange={handlePickup}
                  type="text"
                  ref={originRef}
                  placeholder="Pickup Location"
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </Autocomplete>
            </div>
            <div className="">
              <label htmlFor="delivery_location" className="font-work">
                Choose Delivery Location
              </label>
              <Autocomplete>
                <input
                  name="delivery_location"
                  onChange={handleDropoff}
                  type="text"
                  ref={destinationRef}
                  placeholder="Delivery Location"
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </Autocomplete>
            </div>
          </div>
          <div>
            <h3>{distance}</h3>
            <h3>{duration}</h3>
          </div>
          <div className="flex justify-around ">
            <button className="border-2 p-2" onClick={() => map.panTo(center)}>
              center map
            </button>
            <button className="border-2 p-2" onClick={calculateRoute}>
              calculate route
            </button>
            <button className="border-2 p-2" onClick={clearRoute}>
              clear route
            </button>
          </div>
          <div className="flex justify-around m-2 rounded-lg mt-10">
            <div className="max-w-[1400px] w-[100%] h-[500px]">
              <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={{
                  zoomControl: false,
                  streetViewControl: false,
                  fullscreenControl: false,
                  mapTypeControl: false,
                }}
                onLoad={(map) => setMap(map)}
              >
                <Marker position={center} />
                {direction && <DirectionsRenderer directions={direction} />}
              </GoogleMap>
            </div>
          </div>
          <div className="p-[20px] flex justify-end font-work mt-16">
            <button
              onClick={handleCancel}
              className="border-2 px-4 py-2 mx-2 rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={handleNavigate}
              className="border px-4 py-2 mx-2 rounded-full bg-blue-800 text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
