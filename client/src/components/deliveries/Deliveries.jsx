import React from "react";
import { useState, useEffect } from "react";
import DeliveryDetails from "./DeliveryDetails";
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
      let request = await fetch("http://localhost:3000/parcels")
      let data = await request.json();
      console.log(data);
      setPosts(data);
    }
    getData();
  },[])


  return (
    <div className="grid gap-2 lg:grid-cols-4 max-w-[1300px] w-[100%]" style={{padding: "20px 150px 450px 40px", backgroundColor: "#E5DDD1"}}>
      {posts.map((items, key) => (
        < DeliveryDetails category={ items.category_type } key={key} pickup={items.pickup_location} place={items.place} weight={items.weight} id={items.id} />
      ))}
    </div>
  );
}

export default Deliveries;
