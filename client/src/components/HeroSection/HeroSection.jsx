import { useNavigate } from "react-router-dom";

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
      <div className="flex justify-between px-8 py-2 border-b border-blue-900">
        <h1 className="text-[34px]">SendIT</h1>
        <div className="my-auto text-xl font-bold">
          <button
            className="border-2 mr-4 px-4"
            style={{ borderRadius: "18px" }}
            onClick={handleNavigateLogin}
          >
            Login
          </button>
          <button
            className="border-2 px-4"
            style={{ borderRadius: "18px" }}
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
          <button className="py-2 rounded-lg text-blue-800 bg-white font-inter font-bold max-w-[160px] w-[100%] text-xl">
            Get Started
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
