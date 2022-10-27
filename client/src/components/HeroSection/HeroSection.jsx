import { useNavigate } from "react-router-dom";
import { IoIosSend } from 'react-icons/io';

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
      className=" w-[100%] items-center justify-start shadow-md h-full text-white"
      style={{ background: "#2B4263" }}
    >
      <div className="flex justify-between px-8 py-2 border-b border-blue-800">
        <h1 className="text-[34px]">SendIT</h1>
        <div className="my-auto text-xl font-bold">
          <button
            className="active:border-2 active:bg-white active:text-blue-800 mr-2 border-2 border-white px-4"
            style={{ borderRadius: "22px" }}
            onClick={handleNavigateLogin}
          >
            Login
          </button>
          <button
            className="active:border-2 active:bg-white active:text-blue-800 border-2 border-white px-4"
            style={{ borderRadius: "22px" }}
            onClick={handleNavigateSignup}
          >
            Signup
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row  w-[100%] items-center justify-start shadow-md">
        <div className="max-w-[550px] w-[100%] ml-14">
          <h2 className="font-extrabold text-6xl mb-[20px]">
            SendIT Courier <br></br>Service
          </h2>
          <p className="mb-[70px] text-2xl">
            SendIT is a courier service that helps users deliver<br></br>parcels
            to different destinations.
          </p>
          <button className="py-2 px-3 rounded-lg text-blue-800 bg-white font-inter font-extrabold max-w-[200px] w-[100%] text-2xl flex">
            Get Started <IoIosSend className="ml-2"/>
          </button>
        </div>
        <div className="">
          <img
            src={process.env.PUBLIC_URL + "/delivery-man.png"}
            alt=""
            className="relative top-22 max-w-[700px] w-[100%] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
