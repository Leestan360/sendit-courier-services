import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../features/order";
import { setOrderList } from "../../features/orderList";

const SendDelivery = () => {
  const navigate = useNavigate();
  // const [ option, setOption ] = useState({})
  const option = useSelector((state) => state.orderList.value);

  const handleNavigate = () => {
    navigate("/location");
  };

  const dispatch = useDispatch();
  const { orderState, loading, error } = useSelector((state)=> ({...state.order}));

  const handleInput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOrderList({...option, [name]:value}));
    // setOption({ ...option, [name]:value});
    console.log(option);
  }

  

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">Parcel Delivery</h2>
      <hr className="mx-5 my-2 border" />
      <div className="flex justify-around">
        <div className="bg-white mx-5 w-[100%] shadow-lg p-5 rounded-md">
          <div className="">
            
            <h3 className="text-md font-bold font-work">Measurements</h3>
            <hr className="my-2 border" />
            <div className="flex flex-col md:flex-row justify-around mt-[30px]">
              {/* <div className="flex flex-col justify-center md:justify-around">
                <label htmlFor="length" className="py-2 font-work">
                  Choose Length
                </label>
                <select
                  name="delivery_length"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">-- null --</option>
                  <option value="25">0metres to 10metres</option>
                  <option value="50">10metres to 20metres</option>
                  <option value="100">Above 30metres</option>
                </select>
              </div> */}
              <div className="flex flex-col">
                <label htmlFor="weight" className="py-2 font-work">
                  Choose Weight
                </label>
                <select
                  name="weight"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">--null--</option>
                  <option value="25">0kg to 50kg</option>
                  <option value="50">50 to 100kg</option>
                  <option value="100">100kg to 200kg</option>
                </select>
              </div>
              {/* <div className="flex flex-col">
                <label htmlFor="width" className="py-2 font-work">
                  Choose Width
                </label>
                <select
                  name="width"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">-- null --</option>
                  <option value="25">0metres to 10metres</option>
                  <option value="50">10metres to 20metres</option>
                  <option value="100">Above 30metres</option>
                </select>
              </div> */}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-md font-bold font-work">Description</h3>
            <hr className="my-2 border" />
            <div className="flex flex-col md:flex-row justify-around mt-[30px]">
              <div className="flex flex-col">
                <label htmlFor="catergory" className="py-2 font-work">
                  Choose Catergory
                </label>
                <select
                  name="category_type"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">-- null --</option>
                  <option value="25">Electronics</option>
                  <option value="50">Clothing</option>
                  <option value="100">Paint</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="perishability" className="py-2 font-work">
                  Choose Perishability
                </label>
                <select
                  name="perishable"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">-- null --</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="fragility" className="py-2 font-work">
                  Choose Fragility
                </label>
                <select
                  name="fragility"
                  id=""
                  onChange={handleInput}
                  className="p-2 bg-white border border-blue-300 rounded outline-none font-open max-w-[220px]"
                >
                  <option value="null">-- null --</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-[20px] flex justify-end font-work mt-16">
            <button className="border-2 px-4 py-2 mx-2 rounded-full">
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

export default SendDelivery;
