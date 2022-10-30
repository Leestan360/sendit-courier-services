import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import SendDelivery from "../../components/SendDelivery/SendDelivery";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userId, { setUserId } from "../../features/userId";


const DeliveryDetails = ( {login } ) => {
  const display = useSelector( ( state ) => state.toggle.value );
  const dispatch = useDispatch();

  
  useEffect( () => {
    fetch( "/me" )
      .then( ( r ) => r.json() )
      .then( ( user ) => dispatch( setUserId(user) ) );
  }, [ login ] );

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
