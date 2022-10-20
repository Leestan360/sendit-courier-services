import DashBoard from "../../components/dashboard/DashBoard";
import NavBar from "../../components/navbar/NavBar";
import { useSelector } from "react-redux";

const Home = () => {

    const display = useSelector((state)=> state.toggle.value);

    return ( 
        <div>
            <NavBar />
            <div>
                {display?<DashBoard /> : null}
                
            </div>
        </div>
     );
}
 
export default Home;