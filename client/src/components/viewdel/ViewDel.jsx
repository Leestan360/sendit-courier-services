import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Edit from "../editItem/Edit";
// import { FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function ViewDel() {
  const id = useSelector((state) => state.parcelID.value);
  const [parcel, setParcel] = useState("");
  let num1 = Date.now();
  const navigate = useNavigate();
  const [location, setLocation] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let request = await fetch(`/parcels/${id}`);
      let data = await request.json();
      // console.log(data);
      setParcel(data);
      setLocation(data.delivery_location);
    };
    getData();
  }, []);

  function handleDeleteClick(e) {
    let url = `/parcels/${e.target.id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedObj) => handleDelete(deletedObj));
    navigate("/mydeliveries");
  }

  function handleDelete(deletedObj) {
    let newList = parcel.filter((parcel) => parcel.id !== deletedObj.id);
    setParcel(newList);
  }

  const handleToggleEdit = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">View Delivery</h2>
      <hr className="m-2 border" />
      <div className="flex justify-around">
        <div className="bg-white  w-[100%] shadow-lg p-1 rounded-md">
          <div className="flex p-5">
            <div className="p-2 text-blue-500 bg-indigo-50 rounded-full mr-3 w-[55px] h-[55px]">
              <i className="bx bx-list-ul bx-md"></i>
            </div>
            <div>
              <h3 className="text-2xl font-jost">ID: {num1}</h3>
              <p className="w-[100px] rounded-full bg-indigo-50 text-blue-300 text-center">
                in transit
              </p>
            </div>
          </div>
          <hr className="mx-5 my-2 border" />
          <div>
            <h2 className="font-open text-lg font-bold  m-2">
              Order Information
            </h2>
            <div className="flex flex-col justify-around md:flex-row">
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]">
                  <i className="bx bx-list-ul bx-md"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">Weight</h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work">{parcel.weight}</span>
                    kilograms
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]">
                  <i className="bx bxs-category bx-md"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">
                    Category Type
                  </h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work">
                      {parcel.category_type}{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px] flex justify-around items-center ">
                  <i className="fa-solid fa-scale-unbalanced-flip fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">
                    Fragility
                  </h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work">
                      {parcel.fragility}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-around md:flex-row mt-4">
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]  flex justify-around items-center ">
                  <i className="fa-sharp fa-solid fa-location-dot fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">
                    Pickup Location
                  </h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work">
                      {" "}
                      {parcel.pickup_location}{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1 ">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px]  flex justify-around  items-center">
                  <i className="fa-solid fa-location-crosshairs fa-xl"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">
                    Delivery Location
                  </h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work"> {location} </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-4 bg-indigo-50 max-w-[300px] w-[100%] rounded-lg m-1">
                <div className="p-2 text-blue-500 bg-indigo-100 rounded-full mr-3 w-[55px] h-[55px] flex justify-around ">
                  <i className="bx bxs-time bx-md"></i>
                </div>
                <div>
                  <h3 className="text-base font-work font-extrabold">
                    Expected Time
                  </h3>
                  <p className="w-[200px] rounded-full bg-indigo-50 text-blue-800 ">
                    <span className="text-xl font-work">
                      {" "}
                      {parcel.expected_time}{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mr-[100px] m-5">
            <div className="flex items-center justify-start mt-[50px]">
              <button
                onClick={handleToggleEdit}
                id={parcel.id}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-3 w-[80px] m-2"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                id={parcel.id}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-red-500 border rounded hover:bg-red-600 py-3 w-[80px] m-2"
              >
                Delete
              </button>
            </div>
            <div className="flex justify-start ">
              {toggle ? (
                <Edit
                  id={parcel.id}
                  parcel={parcel}
                  setLocation={setLocation}
                />
              ) : null}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDel;
