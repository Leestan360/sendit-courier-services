import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, formError, userData } from "../../features/login";
import login from "./login.svg";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { loginState, loading, error } = useSelector((state) => ({
    ...state.login,
  }));
  // console.log(formError);

  //navigate to signup
  const handleNavigateSignup = () => {
    navigate("/signup");
  };

  //handles inputs from signup form
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value.toLowerCase() });
    // console.log(user);
  };

  //submit userdata to database
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(user);
    dispatch(loginUser(user));
    // console.log(userData);
  };

  //fetches user data stored in redux state
  useEffect(() => {
    if (!!loginState.id) {
      // console.log(loginState.id);
      // console.log(loginState);
      navigate("/delivery");
    }
    // console.log(error);
  }, [userData]);


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
            <h3
              tabIndex={0}
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 flex"
            >
              Don't have an account?
              <p
                onClick={handleNavigateSignup}
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-gray-800 cursor-pointer ml-2"
              >
                Signup here
              </p>
            </h3>
            <form
              onSubmit={handleSubmit}
              className="xxs:w-[250px] xsm:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[300px] mt-5"
            >
              <div className="mt-3 w-full">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none text-gray-800 "
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  id="email"
                  aria-labelledby="email"
                  name="email"
                  type="email"
                  className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="e.g: john@gmail.com "
                  onChange={handleInput}
                />
              </div>
              <div className="mt-3 w-full">
                <label
                  htmlFor="myInput"
                  className="text-sm font-medium leading-none text-gray-800 "
                >
                  {" "}
                  Password{" "}
                </label>
                <input
                  id="myInput"
                  name="password"
                  //   type={showpass ? "text" : "password"}
                  type="password"
                  onChange={handleInput}
                  className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <p className="text-red-500 text-xs m-3">
                  {formError.errors[0]}
                </p>
              </div>
              <div className="mt-2">
                <input
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-full"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
