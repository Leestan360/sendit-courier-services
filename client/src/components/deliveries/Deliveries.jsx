import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ViewDel from "../viewdel/ViewDel";

// const posts = [
//         {
//             title: "Order Number: #87654",
//             subtitle: "Electronic",
//             content: "Narok",
//             place: "Kisumu",
//             weight: "88 kg"
//         },
//         {
//             title: "Order Number: #87655",
//             subtitle: "Electronic",
//             content: "Lodwar",
//             place: "Kitale",
//             weight: "33 kg"
//         },
//         {
//             title: "Order Number: #87656",
//             subtitle: "Electronic",
//             content: "Eldoret",
//             place: "Garisa",
//             weight: "70 kg"
//         },
//         {
//             title: "Order Number: #87657",
//             subtitle: "Electronic",
//             content: "Kakamega",
//             place: "Lamu",
//             weight: "300 kg"
//         },
//         {
//             title: "Order Number: #87658",
//             subtitle: "Electronic",
//             content: "Nairobi",
//             place: "Thika",
//             weight: "90 kg"
//         },
//         {
//             title: "Order Number: #87659",
//             subtitle: "Electronic",
//             content: "Nairobi",
//             place: "Kisumu",
//             weight: "27 kg"
//         },
//         {
//             title: "Order Number: #87660",
//             subtitle: "Electronic",
//             content: "Nakuru",
//             place: "Kisumu",
//             weight: "57 kg"
//         },
//         {
//             title: "Order Number: #87661",
//             subtitle: "Electronic",
//             content: "Nairobi",
//             place: "Mombasa",
//             weight: "57 kg"
//         },
//     ];

function Deliveries() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const handleView = () => {
    navigate("/viewdelivery");
  };

  // useEffect(() => {
  //   fetch("/parcels")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       return setPosts(data)
  //     }
  // },[]);

  useEffect(()=>{
    const getData = async ()=>{
      let request = await fetch("/parcels")
      let data = await request.json();
      console.log(data);
      setPosts(data);

    }
    getData();
  },[])


  return (
    <div className="grid gap-2 lg:grid-cols-4 max-w-[1300px] w-[100%]">
      {posts.map((items, key) => (
        <div
          className="w-full rounded-lg shadow-md lg:max-w-sm  bg-white"
          key={key}
        >
          <div className="p-4">
            <h4 className="text-xl font-semibold text-slate-800">
              {items.category_type}
            </h4>
            <h5 className="text-x font-roboto text-slate-600">
              {/* {items.subtitle} */}
            </h5>{" "}
            <hr /> <br /> <br />
            <p className="mb-2 leading-normal flex gap-6">
              <GoLocation className="text-blue-800" size={20} />
              {items.pickup_location}{" "}
              <BsArrowRight className="text-blue-800" size={20} /> {items.place}
            </p>
            <p className="mb-2 leading-normal flex gap-6">
              <FaWeightHanging size={20} /> {items.weight}
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
          <p className="hideme">{ <ViewDel items={ items } itemId= {items.id} /> }</p>
        </div>
      ))}
    </div>
  );
}

export default Deliveries;
