const DashBoard = () => {
  return (
    <div className="font-work">
      <div className="border-transparent w-[300px] xsm:w-[200px] relative bg-white shadow  flex flex-col justify-between">
        <div>
          <ul className="mt-6 flex flex-col ">
            <div className="flex justify-start items-center py-3 pl-5 text-slate-800 hover:text-blue-800 hover:shadow-md">
              <i class="bx bx-home-alt bx-sm mx-2"></i>
              <li className="flex  cursor-pointer  text-base">
                Home
              </li>
            </div>
            <div className="flex justify-start items-center py-3 pl-5 text-slate-800  hover:text-blue-800 hover:shadow-md">
              <i class="bx bx-trip bx-sm mx-2"></i>
              <li className="flex cursor-pointer  text-base">
                Send Delivery
              </li>
            </div>
            <div className="flex justify-start items-center py-3 pl-5 text-slate-800  hover:text-blue-800 hover:shadow-md">
              <i class="bx bx-package bx-sm mx-2"></i>
              <li className="flex cursor-pointer  text-base">
                My Deliveries
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
