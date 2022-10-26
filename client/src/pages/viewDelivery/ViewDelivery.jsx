import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";
import ViewDel from "../../components/viewdel/ViewDel";


const MyDeliveries = () => {
    const display = useSelector((state) => state.toggle.value);

    return (
      <div>
        <NavBar />
        <div className="flex">
          <div>{display ? <DashBoard /> : null}</div>
            <ViewDel />
        </div>
      </div>
    );
}

export default MyDeliveries;