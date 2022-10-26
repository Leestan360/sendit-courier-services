import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import Location from "../../components/Location/Location";
import { useSelector } from "react-redux";


const DeliveryLocation = () => {
  const display = useSelector((state) => state.toggle.value);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div>{display ? <DashBoard /> : null}</div>
        <Location />
      </div>
    </div>
  );
};

export default DeliveryLocation;
