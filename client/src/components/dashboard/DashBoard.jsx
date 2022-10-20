import { useDispatch } from "react-redux";
import { disableNavbar } from "../../features/toggle";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const dispatch = useDispatch();

  const handleDisableNavbar = () => {
    dispatch(disableNavbar());
  };

  return (
    <div className="font-work">
      <div className="border-transparent w-[300px] xsm:w-[200px] relative bg-white shadow  flex flex-col justify-between">
        <div>
          <ul className="mt-6 flex flex-col ">
            <div
              className="flex justify-start items-center py-3 pl-5 text-slate-800 hover:text-blue-800 hover:shadow-md  cursor-pointer "
              onClick={handleDisableNavbar}
            >
              <Link to={"/"} className="flex">
                <i class="bx bx-home-alt bx-sm mx-2"></i>
                <li className="flex  text-base">Home</li>
              </Link>
            </div>
            <div
              className="flex justify-start items-center py-3 pl-5 text-slate-800  hover:text-blue-800 hover:shadow-md  cursor-pointer "
              onClick={handleDisableNavbar}
            >
              <Link to={"/delivery"} className="flex">
                <i class="bx bx-trip bx-sm mx-2"></i>
                <li className="flex cursor-pointer  text-base">
                  Send Delivery
                </li>
              </Link>
            </div>
            <div
              className="flex justify-start items-center py-3 pl-5 text-slate-800  hover:text-blue-800 hover:shadow-md  cursor-pointer "
              onClick={handleDisableNavbar}
            >
              <Link to={"/delivered"} className="flex">
                <i class="bx bx-package bx-sm mx-2"></i>
                <li className="flex cursor-pointer  text-base">
                  My Deliveries
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
