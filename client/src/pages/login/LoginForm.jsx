import { useState } from "react";
import { formError } from "../../features/login";
import { useNavigate } from "react-router-dom";

function LoginForm ({onLogin}) {
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ errors, setErrors ] = useState( [] );
    const navigate = useNavigate()
    // console.log(onLogin);

    function handleSubmit ( e ) {
        e.preventDefault();
        setIsLoading( true );
        fetch( "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { email, password } ),
        } ).then( ( r ) => {
            setIsLoading( false );
            if ( r.ok )
            {
                r.json().then( ( user ) => onLogin( user ) );
                // console.log( onLogin );
            } else
            {
                r.json().then( ( err ) => setErrors( err.errors ) );
            }
        } );
        navigate("/delivery")
    }

  return (
      <form
          onSubmit={ handleSubmit }
          className="xxs:w-[250px] xsm:w-[400px] sm:w-[500px] md:w-[600px] lg:w-[300px] mt-5"
      >
          <div className="mt-3 w-full">
              <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none text-gray-800 "
              >
                  { " " }
                  Email{ " " }
              </label>
              <input
                  id="email"
                  aria-labelledby="email"
                  name="email"
                  type="email"
                  className="bg-gray-100 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="e.g: john@gmail.com "
                  value={email}
                  onChange={ ( e ) => setEmail( e.target.value ) }
              />
          </div>
          <div className="mt-3 w-full">
              <label
                  htmlFor="password"
                  className="text-sm font-medium leading-none text-gray-800 "
              >
                  { " " }
                  Password{ " " }
              </label>
              <input
                  id="password"
                  name="password"
                  //   type={showpass ? "text" : "password"}
                  type="password"
                  className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  value={password}
                  onChange={ ( e ) => setPassword( e.target.value ) }
              />
              <p className="text-red-500 text-xs m-3">
                  { formError.errors[ 0 ] }
              </p>
          </div>
          <div>
              { errors.map( ( err ) => (
                  <p key={ err }>{ err }</p>
              ) ) }
          </div>
          <div className="mt-2">
              <input
                  type="submit"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-full"
                  value={ isLoading ? "Loading..." : "Login" }
              />
          </div>
      </form>
  )
}

export default LoginForm