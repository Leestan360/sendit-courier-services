import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import SendDelivery from "../../components/SendDelivery/SendDelivery";

const DeliveryDetails = () => {
  const display = useSelector((state) => state.toggle.value);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div>{display ? <DashBoard /> : null}</div>
        <SendDelivery />
      </div>
    </div>
  );
};

export default DeliveryDetails;
