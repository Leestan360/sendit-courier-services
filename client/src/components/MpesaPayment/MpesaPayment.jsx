import { setOrderList } from "../../features/orderList";
import { setOrder } from "../../features/order";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const MpesaPayment = ({ choose }) => {
  const [number, setNumber] = useState(null);
  const dispatch = useDispatch();
  const option = useSelector((state) => state.orderList.value);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({[name]:value});
    setNumber({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setOrderList({ ...option }));
    console.log(option);
    dispatch(setOrder({ ...option }));
    const mpesaPay = async () => {
      let request = await fetch(
        "http://2517-154-152-171-184.ngrok.io/stkpush",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: number,
            amount: 100,
          }),
        }
      );
      console.log(request);
      let response = await request.json();
      console.log(request.ok);
      if (request.ok) {
      }
    };
    mpesaPay();
  };

  return (
    <div style={choose ? { display: "block" } : { display: "none" }}>
      <div className="flex flex-col mt-3">
        <label htmlFor="card-number" className="font-work mx-2">
          Phone Number
        </label>
        <input
          type="text"
          name="number"
          onChange={handleInput}
          className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="border p-2 mx-2 max-w-[400px] w-[100%] bg-blue-800 rounded text-white font-work mt-2"
      >
        Pay Now
      </button>
    </div>
  );
};

export default MpesaPayment;
