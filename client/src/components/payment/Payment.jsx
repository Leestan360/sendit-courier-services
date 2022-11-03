import CardInfo from "../CardInfo/CardInfo";
import { useNavigate } from "react-router-dom";
import MpesaPayment from "../MpesaPayment/MpesaPayment";
import { useState } from "react";
import { setOrderList } from "../../features/orderList";
import { useDispatch, useSelector } from "react-redux";

const Payment = () => {

    const [ choosePayment, setChoosePayment ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const option = useSelector((state) => state.orderList.value);

    const handleChoosePayment = ()=>{
        setChoosePayment(!choosePayment);
    }

    const handleCancel = () => {
      dispatch(setOrderList({}));
      navigate("/location");
    };
  

  return (
    <div className="bg-gray-100 w-[100%] text-slate-900">
      <h2 className="font-open text-lg font-bold mx-5 my-2">
        Delivery Payment
      </h2>
      <hr className="mx-5 my-2 border" />
      <div className="flex justify-around">
        <div className="bg-white mx-5 w-[100%] shadow-lg p-5 rounded-md">
          <h3 className="text-md font-bold font-work">
            Select a Payment Method
          </h3>
          <hr className="my-2 border" />
          <div className="flex items-center mt-5">
            <button onClick={handleChoosePayment} className="px-3 p-2 border-2 font-open rounded-lg flex items-center text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white">
              <i className="bx bxs-credit-card bx-sm mx-1"></i>Debit Card
            </button>
            <h2 className="mx-3">OR</h2>
            <button onClick={handleChoosePayment} className="px-3 p-2 border-2 font-open rounded-lg flex items-center text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white">
              <i className="bx bxs-mobile bx-sm"></i>MPesa Payment
            </button>
          </div>
          <h3 className="text-md font-bold font-work mt-10">
           Enter Your Billing Information
          </h3>
          <hr className="my-2 border" />
          <CardInfo choose={choosePayment}/>
          <MpesaPayment choose={choosePayment}/>
          <div className="p-[20px] flex justify-end font-work mt-16">
            <button onClick={handleCancel} className="border-2 px-4 py-2 mx-2 rounded-full">
              Cancel
            </button>
            <button className="border px-4 py-2 mx-2 rounded-full bg-blue-800 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
