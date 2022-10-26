import { useState } from "react";

const MpesaPayment = ({ choose }) => {
  const [number, setNumber] = useState("");

  function handleChange(e) {
    setNumber(e.target.value);
  }

  function handleSubmit(e) {
    
  }

  return (
    <div style={choose ? { display: "block" } : { display: "none" }} >
      <form type="submit" onSubmit={handleSubmit} >
      <div className="flex flex-col mt-3">
        <label htmlFor="card-number" className="font-work mx-2">
          Phone Number
        </label>
        <input
          type="text"
          name="card-number"
          value={number}
          onChange={handleChange}
          className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
        />
      </div>
      <button className="border p-2 mx-2 max-w-[400px] w-[100%] bg-blue-800 rounded text-white font-work mt-2" type="submit">
        Pay Now
      </button>
      </form>
    </div>
  );
};

export default MpesaPayment;
