import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeliveryDetails from "./DeliveryDetails";
import { setCurrentUser } from "../../features/currentUser";
import messenger from './Messenger-pana.svg'
import { useNavigate } from "react-router-dom";

function Deliveries() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [ hasPosts, setHasPosts ] = useState(false);
  // const user = JSON.parse(localStorage.getItem("user"))
  const currentUser = useSelector((state) => ({ ...state.currentUser.value }));
  const navigate = useNavigate()

  const { signupState } = useSelector((state) => ({ ...state.signup }));
  const { loginState } = useSelector((state) => ({
    ...state.login,
  }));
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      // let userRequest = await fetch("http://localhost:3000/me");
      // let userRequestData = await userRequest.json();
      // await console.log(userRequestData);
      // if(userRequest.ok){
      //   await setUser(userRequestData);
      //   await dispatch(setCurrentUser(userRequestData));
      // }
      // if(!!currentUser){
      //   navigate("/")
      // }
      let request = await fetch("/parcels");
      let data = await request.json();
      // console.log(data);
      if(request.ok){
        setHasPosts(true);
      }
      // console.log(user.id);
      const filter = await data.filter((parcel) => {
        return parcel.user.id === currentUser.id;
      });
      await setPosts(filter); 
      // await console.log(filter);
    };
    getData();
  }, [user.id]);

  return (
    <div className="grid gap-2 lg:grid-cols-3 bg-indigo-50 min-h-screen p-5 w-full ">
      {posts.map((items, index) => (
        <DeliveryDetails
          category={items.category_type}
          pickup={items.pickup_location}
          place={items.delivery_location}
          weight={items.weight}
          id={items.id}
          time={items.expected_time}
          fragile={items.fragility}
          perishable={items.perishable}
        />
      ))
      // <img src={messenger} alt="" />
      }
    </div>
  );
}

export default Deliveries;
