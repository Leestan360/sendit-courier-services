import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import plane from "./plane.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigateSignup = () => {
    navigate("/signup");
  };

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="overflow-hidden  w-[100%] items-center justify-start shadow-md  text-white"
      style={{ background: "#2B4263" }}
    >
      <div className="flex justify-between shadow-lg p-3">
        <h1 className="text-[34px] text-4xl font-bold">SendIT</h1>
        <div className="flex flex-col xsm:flex-row text-xl font-bold">
          <button
            className="active:border-2 text-base active:bg-white active:text-blue-800 mr-2 border-2 border-white px-3 rounded-full font-open hover:bg-white hover:text-blue-900"
          >
            <a href="http://localhost:3000/admin">Admin</a>
          </button>
          <button
            className="active:border-2 active:bg-white active:text-blue-800 mr-2 border-2 border-white px-3 rounded-full font-open text-base hover:bg-white hover:text-blue-900"
            onClick={handleNavigateLogin}
          >
            Login
          </button>
          <button
            className="hover:border-2 bg-white text-blue-900 border-2 border-white px-3 shadow-lg rounded-full font-open text-base hover:bg-white hover:text-blue-900"
            onClick={handleNavigateSignup}
          >
            Signup
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  w-[100%] items-center justify-around shadow-md font-poppins ">
        <div className="lg:max-w-[450px]  w-[100%] p-5 ">
          <div>
            <h2 className="font-extrabold text-5xl mb-[20px] scale-100">
              SendIT Courier Service
            </h2>
            <img src={plane} alt="" className=" hidden lg:block absolute top-24 left-0 lg:left-32 max-w-[500px] w-[100%] " />
          </div>
          <p className="mb-[70px] text-xl">
            SendIT is a courier service that helps users deliver<br></br>parcels
            to different destinations.
          </p>
          <button className="py-2 px-1 rounded-lg text-blue-900 bg-white font-poppins max-w-[160px] w-[100%] text-xl flex items-center justify-around hover:bg-gray-200">
            Get Started <i className="fa-solid fa-paper-plane text-blue-900"></i>
          </button>
        </div>
        <div className="md:max-w-[700px] lg:min-w-[700px] w-[100%] lg:min-h-[500px] h-[100%] ">
          <img
            src={process.env.PUBLIC_URL + "/delivery-man.png"}
            alt=""
            className=" z-10 relative top-4 sm:top-22 md:max-w-[700px] lg:min-w-[700px] w-[100%] lg:min-h-[500px] lg:h-[100%] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
