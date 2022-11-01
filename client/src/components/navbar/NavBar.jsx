import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toggleNavbar } from "../../features/toggle";
import { loginUser, formError, userData } from "../../features/login";
import { setCurrentUser } from "../../features/currentUser";
// import { toggle } from "../../features/toggle";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleState = useSelector((state) => state.toggle.value);
  const { signupState } = useSelector((state) => ({ ...state.signup }));
  const { loginState } = useSelector((state) => ({
    ...state.login,
  }));
  const [user, setUser] = useState({});
  

  const handleToggle = () => {
    dispatch(toggleNavbar(!toggleState));
  };

  // //fetches user data stored in redux state
  // useEffect(() => {
  //   console.log(signupState);
  //   console.log(!!signupState.id);
  //   if (signupState.id) {

  //   }
  // }, [signupState]);

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("user")));
    // setUser(JSON.parse(localStorage.getItem("user")));
    // console.log(user);
    // dispatch(setCurrentUser(JSON.parse(localStorage.getItem("user"))))
    fetch( "/me" )
      .then( ( r ) => r.json() )
      .then( ( user ) => { 
        console.log( user );
        setUser(user)
        dispatch(setCurrentUser(user))
       } )
  }, []);

  return (
    <div className="flex justify-between items-center text-slate-800 shadow-lg p-2">
      <div className="flex items-center">
        <i
          class="bx bx-menu bx-md mx-2"
          data-testid="menu-icon"
          onClick={handleToggle}
        ></i>
        <h1 className="font-open text-2xl">Send IT</h1>
      </div>
      <div className="flex items-center">
      <i class='bx bxs-user-circle bx-md'></i>
        <h3 className="hidden md:block font-open mx-5">Welcome {user.first_name} {user.last_name}</h3>
      </div>
    </div>
  );
};

export default NavBar;
