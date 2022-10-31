import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [ filteredPosts, setFilteredPosts ] = useState([]);
  // const user = JSON.parse(localStorage.getItem("user"))
  const currentUser  = useSelector((state)=>({ ...state.currentUser.value }))

  const { signupState } = useSelector((state) => ({ ...state.signup }));
  const { loginState } = useSelector((state) => ({
    ...state.login,
  }));


  console.log(currentUser)
 
  

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
      // setPosts(data);
      // setFilteredPosts(data)
      const filter = await data.filter((parcel)=>{
        return parcel.user.id === currentUser.id ;
      })
      await setPosts(filter);
      // const filtered = filteredPosts.filter((parcel)=>{
      //   return parcel.user.id === currentUser.id
      // })
      // console.log(filtered);
      // setPosts(filtered);
      console.log(posts)
    }
    getData();
  },[ ])



  return (
    <div className="grid gap-2 lg:grid-cols-3 bg-indigo-50 min-h-screen p-5 w-full ">
      {posts.map((items, key) => (
        < DeliveryDetails category={ items.category_type } pickup={items.pickup_location} place={items.delivery_location} weight={items.weight} id={items.id} time={items.expected_time} fragile={items.fragility} perishable={items.perishable} />
      ))}
    </div>
  );
}

export default Deliveries;
