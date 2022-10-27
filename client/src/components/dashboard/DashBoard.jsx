import { useDispatch } from "react-redux";
import { disableNavbar } from "../../features/toggle";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const dispatch = useDispatch();

  const handleDisableNavbar = () => {
    dispatch(disableNavbar());
  };

  return (
    <div className="font-work bg-blue-900">
      <div className="border-transparent w-[300px] xsm:w-[200px] absolute bg-blue-900 shadow h-screen flex flex-col justify-between text-white">
        <div>
          <ul className="mt-6 flex flex-col ">
            <div
              className="flex justify-start items-center py-3 pl-5 hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
              onClick={handleDisableNavbar}
            >
              <Link to={"/"} className="flex">
                <i class="bx bx-home-alt bx-sm mx-2"></i>
                <li className="flex  text-base">Home</li>
              </Link>
            </div>
            <div
              className="flex justify-start items-center py-3 pl-5  hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
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
              className="flex justify-start items-center py-3 pl-5  hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
              onClick={handleDisableNavbar}
            >
              <Link to={"/mydeliveries"} className="flex">
                <i class="bx bx-package bx-sm mx-2"></i>
                <li className="flex cursor-pointer  text-base">
                  My Deliveries
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-7 flex">
        <i class='bx bx-exit bx-sm'></i>
        <h3 className="px-2">Logout</h3>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
