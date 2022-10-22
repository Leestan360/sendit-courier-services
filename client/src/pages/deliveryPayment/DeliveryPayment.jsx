import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import Payment from "../../components/payment/Payment";


const DeliveryPayment = () => {
    const display = useSelector((state) => state.toggle.value);

    return (
      <div>
        <NavBar />
        <div className="flex">
          <div>{display ? <DashBoard /> : null}</div>
            <Payment />
        </div>
      </div>
    );
}
 
export default DeliveryPayment;