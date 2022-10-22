import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../features/toggle";

const NavBar = () => {
    const dispatch = useDispatch()

    const handleToggle = ()=>{
        dispatch(toggleNavbar(true))
    }


  return (
    <div className="flex justify-between items-center text-slate-800 shadow-lg p-2">
      <div className="flex items-center">
        <i class="bx bx-menu bx-md mx-2" data-testid="menu-icon" onClick={handleToggle} ></i>
        <h1 className="font-open text-2xl">Send IT</h1>
      </div>
      <div className="flex items-center">
        <img
          src={process.env.PUBLIC_URL + "/user-img.jpg"}
          alt=""
          className="max-w-[40px] rounded-full"
        />
        <h3 className="hidden md:block font-open mx-5">Jane Mwangi</h3>
      </div>
    </div>
  );
};

export default NavBar;
