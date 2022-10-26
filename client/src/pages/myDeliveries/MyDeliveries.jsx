import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import Deliveries from "../../components/deliveries/Deliveries";


const MyDeliveries = () => {
    const display = useSelector((state) => state.toggle.value);

    return (
      <div>
        <NavBar />
        <div className="flex">
          <div>{display ? <DashBoard /> : null}</div>
            <Deliveries />
        </div>
      </div>
    );
}

export default MyDeliveries;