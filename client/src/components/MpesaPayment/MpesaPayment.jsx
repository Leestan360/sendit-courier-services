import { useState } from "react";

const MpesaPayment = ({ choose }) => {
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/stkpush", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: number,
        amount: 100,
      }),
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
    })
  }

  return (
    <div style={choose ? { display: "block" } : { display: "none" }}>
      <div className="flex flex-col mt-3">
        <label htmlFor="card-number" className="font-work mx-2">
          Phone Number
        </label>
        <input
          type="text"
          name="number"
          onChange={(e) => setNumber(e.target.value)}
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