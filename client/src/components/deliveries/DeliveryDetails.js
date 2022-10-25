// import  {useEffect, useState} from 'react';
import { GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setParcelId } from "../../features/parcelID";

function DeliveryDetails({ category, key, pickup, place, weight, id }) {
  // const [ parcel, setParcel ] = useState( "" );

  const dispatch = useDispatch();

  // const parcelID = useSelector( ( state ) => state.parcelID.value );

  const navigate = useNavigate();

  const handleView = () => {
    console.log(id);
    dispatch(setParcelId(id));
    navigate("/viewdelivery");
  };

  return (
    <>
      <div
        className="w-full rounded-lg shadow-md lg:max-w-sm  bg-white"
        key={key}
      >
        <div className="p-4">
          <h4 className="text-xl font-semibold text-slate-800">{category}</h4>
          <h5 className="text-x font-roboto text-slate-600">
            {/* {items.subtitle} */}
          </h5>{" "}
          <hr /> <br /> <br />
          <p className="mb-2 leading-normal flex gap-6">
            <GoLocation className="text-blue-800" size={20} />
            {pickup} <BsArrowRight className="text-blue-800" size={20} />{" "}
            {place}
          </p>
          <p className="mb-2 leading-normal flex gap-6">
            <FaWeightHanging size={20} /> {weight}
          </p>
          <br /> <hr /> <br />
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
