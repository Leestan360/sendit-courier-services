const MpesaPayment = ({ choose }) => {
  return (
    <div style={choose?{display:"block"}:{display:"none"}}>
      <div className="flex flex-col mt-3">
        <label htmlFor="card-number" className="font-work mx-2">
          Phone Number
        </label>
        <input
          type="text"
          name="card-number"
          className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
        />
      </div>
      <button
        className="border p-2 mx-2 max-w-[400px] w-[100%] bg-blue-800 rounded text-white font-work mt-2"
      >Pay Now</button>
    </div>
  );
};

export default MpesaPayment;
