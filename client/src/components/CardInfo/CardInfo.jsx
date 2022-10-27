import { setOrderList } from "../../features/orderList";
import { setOrder } from "../../features/order";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const CardInfo = ({ choose }) => {

  const [ user, setUser ] = useState({});
  const dispatch = useDispatch();
  const option = useSelector((state) => state.orderList.value);
  const { signupState, loading, error } = useSelector((state) => ({ ...state.signup }));


    //fetches user data stored in redux state
    useEffect(()=>{
      console.log(signupState);
      setUser(signupState)

    },[signupState])


  const handleCardInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // dispatch(setOrderList({ ...option, [name]: value }));
    // setOption({ ...option, [name]:value});
    // console.log(option);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setOrderList({ user_id:user.id, ...option}))
    console.log(option);
    dispatch(setOrder({ user_id:user.id, ...option}));
  };

  return (
    <div style={choose ? { display: "none" } : { display: "block" }}>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="card-number" className="font-work mx-2">
            Card Number
          </label>
          <input
            type="text"
            name="card_number"
            onChange={handleCardInput}
            className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="card-number" className="font-work mx-2">
            Card Name
          </label>
          <input
            type="text"
            name="card_name"
            onChange={handleCardInput}
            className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="flex flex-col mt-3">
            <label htmlFor="card-number" className="font-work mx-2">
              Expiration Date
            </label>
            <input
              type="text"
              name="expiration_date"
              onChange={handleCardInput}
              className="border rounded max-w-[190px] mx-2 my-1 p-2 outline-none border-slate-800"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="card-number" className="font-work mx-2">
              Security Code
            </label>
            <input
              type="text"
              name="security_code"
              onChange={handleCardInput}
              className="border rounded max-w-[190px] mx-2 my-1 p-2 outline-none border-slate-800"
            />
          </div>
        </div>
        <input
          name="Pay Now"
          type="submit"
          className="border p-2 mx-2 max-w-[400px] w-[100%] bg-blue-800 rounded text-white font-work mt-2"
        />
      </form>
    </div>
  );
};

export default CardInfo;
