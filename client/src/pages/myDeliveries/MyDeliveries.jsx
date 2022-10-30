import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import Deliveries from "../../components/deliveries/Deliveries";


const MyDeliveries = ( { getMe, login } ) => {

  

    const display = useSelector((state) => state.toggle.value);

    return (
      <div>
        <NavBar />
        <div className="flex">
          <div>{display ? <DashBoard /> : null}</div>
            <Deliveries getMe={getMe} login={login} />
        </div>
      </div>
    );
}

export default MyDeliveries;