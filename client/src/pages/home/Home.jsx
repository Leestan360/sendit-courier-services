import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import HeroSection from "../../components/HeroSection/HeroSection";
import MidSection from "../../components/MidSection/MidSection";
import Footer from "../../components/footer/Footer";
import HomePage from "../../components/homepage/HomePage";

const Home = () => {
  const display = useSelector((state) => state.toggle.value);

  const { signupState, loading, error } = useSelector((state) => ({ ...state.signup }));

  // console.log(signupState);
  // console.log(loading);
  // console.log(error);
  

  return (
    <div>
      <div className="flex">
        {/* <div>{display ? <DashBoard /> : null}</div> */}
        <div className="flex flex-col w-[100%]">
        <HeroSection />
        <MidSection />
        <HomePage />
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
