import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, formError } from "../../features/login";
import login from "./login.svg";
import LoginForm from "./LoginForm";

const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const [ showLogin, setShowLogin ] = useState( true );
  




  // const [user, setUser] = useState({});
  // const [data, setData] = useState();
  // const dispatch = useDispatch();
  // const { loginState, loading, error } = useSelector((state) => ({
  //   ...state.login,
  // }));
  // console.log(formError);

  //navigate to signup
  const handleNavigateSignup = () => {
    navigate("/signup");
  };

  // //handles inputs from signup form
  // const handleInput = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUser({ ...user, [name]: value.toLowerCase() });
  //   // console.log(user);
  // };

  //submit userdata to database
  // const handleSubmit = (event) => {
  //   event.preventDefault();
    // dispatch(loginUser(user));
    // setData(loginState);
    // console.log(loginState);
    // console.log(data);
    // console.log(loading);
  // };

  // //fetches user data stored in redux state
  // useEffect(() => {
  //   if (!!loginState.id) {
  //     console.log(loginState.id);
  //     console.log(loginState);
  //     navigate("/delivery");
  //   }
  //   console.log(error);
  // }, [loginState]);

  return (
    <div className="bg-indigo-50 font-jost mt-[40px]">
      <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
        <div className=" md:hidden sm:mb-8 mb-6"></div>
        <div className="bg-white shadow-lg rounded  md:w-[100%] md:max-w-[800px] lg:w-[100%] lg:max-w-[1000px] flex flex-col lg:flex-row">
          <div className="md:max-w-[800px] md:w-[100%] lg:w-[500px] flex justify-around items-center p-5">
            <img src={login} alt="" className="object-cover" />
          </div>
          <div className="lg:w-[500px] flex flex-col items-center lg:px-10 sm:px-6 sm:py-10 xxs:py-4">
            <p
              tabIndex={0}
              className="flex justify-around xxs:text-2xl xxs:w-[250px] xxs:p-1 focus:outline-none md: text-3xl lg:text-4xl leading-6 text-gray-800  lg:p-5 lg:w-[400px]"
            >
              Login to your account
            </p>
            <p
              tabIndex={0}
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 flex"
            >
              Don't have an account?
              <h3
                onClick={handleNavigateSignup}
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer ml-2"
              >
                Signup here
              </h3>
            </p>
            <>
              { showLogin ? (

                <>
                  <LoginForm onLogin={ onLogin } />
                  <p>
                    Don't have an account? &nbsp;
                    <button color="secondary" onClick={ () => setShowLogin( false ) }>
                      Sign Up
                    </button>
                  </p>
                </>
              ) : (
                <>
                  {/* <SignUpForm setUser={ setUser } /> */}
                  <p>
                    Already have an account? &nbsp;
                    <button color="secondary" onClick={ () => setShowLogin( true ) }>
                      Log In
                    </button>
                  </p>
                </>
              ) }
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
