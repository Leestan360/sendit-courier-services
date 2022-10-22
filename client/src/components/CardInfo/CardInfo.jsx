const CardInfo = ({choose}) => {
  return (
    <div style={choose?{display:"none"}:{display:"block"}}>
      <form>
        <div className="flex flex-col">
          <label htmlFor="card-number" className="font-work mx-2">
            Card Number
          </label>
          <input
            type="text"
            name="card-number"
            className="border rounded max-w-[400px] mx-2 my-1 p-2 outline-none border-slate-800"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="card-number" className="font-work mx-2">
            Card Name
          </label>
          <input
            type="text"
            name="card-number"
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
              name="card-number"
              className="border rounded max-w-[190px] mx-2 my-1 p-2 outline-none border-slate-800"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="card-number" className="font-work mx-2">
              Security Code
            </label>
            <input
              type="text"
              name="card-number"
              className="border rounded max-w-[190px] mx-2 my-1 p-2 outline-none border-slate-800"
            />
          </div>
        </div>
        <input name="Pay Now" type="submit" className="border p-2 mx-2 max-w-[400px] w-[100%] bg-blue-800 rounded text-white font-work mt-2" />
      </form>
    </div>
  );
};

export default CardInfo;
