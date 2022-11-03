// import  {useEffect, useState} from 'react';
import { GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setParcelId } from "../../features/parcelID";

function DeliveryDetails({
  category,
  pickup,
  place,
  weight,
  id,
  time,
  fragile,
  perishable,
}) {
  // const [ parcel, setParcel ] = useState( "" );

  const dispatch = useDispatch();

  // const parcelID = useSelector( ( state ) => state.parcelID.value );

  const navigate = useNavigate();

  const handleView = () => {
    // console.log(id);
    dispatch(setParcelId(id));
    navigate("/viewdelivery");
  };

  return (
    <>
      <div className="rounded-lg shadow-lg  bg-white " key={id}>
        <div className="p-4">
          <div className="flex items-center ">
            <i className="fa-solid fa-circle fa-sharp fa-sm text-green-400"></i>
            <h3 className="mx-2 font-open text-sm">status</h3>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-center">
            <h4 className="font-poppins text-lg font-semibold text-gray-600">
              {category}
            </h4>
            <div className="flex items-center p-3">
              <i className="fa-regular fa-clock fa-xl mx-2 text-gray-500"></i>
              <h3 className="font-poppins text-gray-500">{time}</h3>
            </div>
          </div>
          <hr className="my-3" />
          <h3 className="font-work m-1">pickup location</h3>
          <div className="flex items-center bg-indigo-50 rounded-lg p-3">
            <i className="fa-solid fa-location-dot fa-xl text-red-500 mx-3"></i>
            <h3 className="font-poppins font-bold text-xl">{pickup}</h3>
          </div>
          <hr className="my-3" />
          <h3 className="font-work m-1">delivery location</h3>
          <div className="flex items-center bg-indigo-50 rounded-lg p-3">
            <i className="fa-solid fa-location-crosshairs fa-xl text-red-400 mx-3"></i>
            <h3 className="font-poppins font-bold text-xl">{place}</h3>
          </div>
          <hr className="my-3" />
          <div className="flex items-center">
            <i className="fa-solid fa-scale-balanced fa-xl text-gray-700 mx-2 "></i>
            <h3 className="font-work">
              <span className=" text-3xl">{weight}</span> kilograms
            </h3>
          </div>
          <hr className="my-3" />
          <div>
            <i
              className="fa-solid fa-square-fragile text-blue-500 "
              // style={fragile ? { display: "block" } : { display: "none" }}
            ></i>
          </div>
          <div className="flex justify-between w-full lg:max-w-sm">
            <button
              onClick={handleView}
              className="px-4 py-2 text-sm text-blue-800 bg-white rounded-2xl shadow flex gap-2"
            >
              <AiOutlineCheckCircle size={20} /> Delivered
            </button>
            <button
              onClick={handleView}
              className="px-4 py-2 text-sm text-blue-100 bg-blue-800 rounded-2xl shadow"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryDetails;
