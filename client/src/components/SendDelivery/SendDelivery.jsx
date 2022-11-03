import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../features/currentUser";
import { setOrder } from "../../features/order";
import { setOrderList } from "../../features/orderList";

const SendDelivery = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  // const [ option, setOption ] = useState({})
  const option = useSelector((state) => state.orderList.value);
  const { signupState } = useSelector((state) => ({ ...state.signup }));

  useEffect(() => {
    const fetchUser = async ()=>{
     let fetchedUser = await fetch("/me")
     let fetched = await fetchedUser.json()
     if(fetchedUser.ok){
       setUser(fetched);
       dispatch(setCurrentUser(fetched));
      //  console.log(fetched);
       return fetched;
     }
     else{
      //  console.log(fetched)
       return fetched;
     }
    }
    fetchUser()
   }, []);

  const handleNavigate = () => {
    navigate("/location");
  };

  const dispatch = useDispatch();
  const { orderState, loading, error } = useSelector((state) => ({
    ...state.order,
  }));

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOrderList({ ...option, [name]: value, user_id: user.id }));
    // console.log(option);
  };

  const handleCancel = () => {
    dispatch(setOrderList({}));
  };

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">Parcel Delivery</h2>
      <hr className="mx-5 my-2 border" />
      <div className="flex justify-around">
        <div className="bg-white mx-5 w-[100%] shadow-lg p-5 rounded-md">
          <div className="">
            <h3 className="text-md font-bold font-work">Measurements</h3>
            <hr className="my-2 border" />
            <div className="flex flex-col md:flex-row justify-start mt-[30px]">
              <div className="">
                <label htmlFor="weight" className="font-work">
                  Add Weight
                </label>
                <input
                  name="weight"
                  onChange={handleInput}
                  type="number"
                  placeholder="weight in kilograms"
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-md font-bold font-work">Description</h3>
            <hr className="my-2 border" />
            <div className="flex flex-col md:flex-row justify-between mt-[30px]">
              <div className="flex flex-col md:max-w-[320px] md:w-[100%] mx-2">
                <label htmlFor="catergory" className="py-2 font-work">
                  Choose Catergory
                </label>
                <select
                  name="category_type"
                  id=""
                  onChange={handleInput}
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 outline-none "
                >
                  <option value="null">-- Choose Category --</option>
                  <option value="Clothings">Clothings</option>
                  <option value="Computing">Computing</option>
                  <option value="Cosmetics">Cosmetics</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashions">Fashions</option>
                  <option value="Gaming">Gaming</option>
                </select>
              </div>
              <div className="flex flex-col  md:max-w-[320px] md:w-[100%] mx-2">
                <label htmlFor="perishable" className="py-2 font-work">
                  Choose perishable
                </label>
                <select
                  name="perishable"
                  id=""
                  onChange={handleInput}
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 outline-none "
                >
                  <option value="null">-- Choose Perishability --</option>
                  <option value="true"> Perishable </option>
                  <option value="false"> Not Perishable </option>
                </select>
              </div>
              <div className="flex flex-col  md:max-w-[320px] md:w-[100%] mx-2">
                <label htmlFor="fragility" className="py-2 font-work">
                  Choose Fragility
                </label>
                <select
                  name="fragility"
                  id=""
                  onChange={handleInput}
                  className="font-jost bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 outline-none "
                >
                  <option value="null">-- Choose Fragility --</option>
                  <option value="true"> Fragile </option>
                  <option value="false"> Not Fragile</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-[20px] flex justify-end font-work mt-16">
            <button
              onClick={handleCancel}
              className="border-2 px-4 py-2 mx-2 rounded-full"
            >
              Clear
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

export default SendDelivery;
