import { useDispatch, useSelector } from "react-redux";
import { disableNavbar } from "../../features/toggle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/logout";
import { setCurrentUser } from "../../features/currentUser";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // console.log("logout");
    dispatch(logoutUser());
    dispatch(setCurrentUser(null));
    navigate("/");
    // dispatch(disableNavbar());
  };
  const handleDisableNavbar = () => {
    dispatch(disableNavbar());
  };
  return (
    <div className="font-work bg-blue-900 h-full">
      <div className="border-transparent w-[300px] xsm:w-[200px] relative z-10 bg-blue-900 shadow h-screen flex flex-col justify-between text-white">
        <div>
          <ul className="mt-6 flex flex-col ">
            <div
              className="flex justify-start items-center py-3 pl-5 hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
              // onClick={handleDisableNavbar}
            >
              <Link to={"/"} className="flex">
                <i className="bx bx-home-alt bx-sm mx-2"></i>
                <li className="flex  text-base">Home</li>
              </Link>
            </div>
            <div
              className="flex justify-start items-center py-3 pl-5  hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
              // onClick={handleDisableNavbar}
            >
              <Link to={"/delivery"} className="flex">
                <i className="bx bx-trip bx-sm mx-2"></i>
                <li className="flex cursor-pointer  text-base">
                  Send Delivery
                </li>
              </Link>
            </div>
            <div
              className="flex justify-start items-center py-3 pl-5  hover:text-white hover:bg-blue-800 m-2 hover:rounded-lg cursor-pointer "
              // onClick={handleDisableNavbar}
            >
              <Link to={"/mydeliveries"} className="flex">
                <i className="bx bx-package bx-sm mx-2"></i>
                <li className="flex cursor-pointer  text-base">
                  My Deliveries
                </li>
              </Link>
            </div>
            <div className="mt-[200px]">
              <Link to="/">
                <button onClick={handleLogoutClick} className="p-7 flex">
                  <i className="bx bx-exit bx-sm"></i>
                  <h3 className="px-2">Logout</h3>
                </button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
