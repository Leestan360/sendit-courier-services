import React from "react";
import { useState, useEffect } from "react";

function Edit({ id, parcel, setLocation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [newLocation, setNewLocation] = useState({});

  // useEffect(() => {
  //   const getData = async () => {
  //     let request = await fetch(`/parcels/${id}`);
  //     let data = await request.json();
  //     console.log(data);
  //     setLocation(data);
  //   };
  //   getData();
  // }, [id]);

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setNewLocation(value);
  };

  function handleUpdate(updateObj) {
    setLocation(updateObj);
  }

  function handleUpdateClick(e) {
    e.preventDefault();
    console.log(id);
    let url = `/parcels/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        delivery_location: newLocation,
      }),
    })
      .then((r) => r.json())
      .then((updateObj) => {
        console.log(updateObj);
        handleUpdate(updateObj.delivery_location);
      });
  }

  // const handleSubmit = ( e ) => {
  //     e.preventDefault();
  //     updateProduct();
  // };

  // const updateProduct = () => {
  //     fetch( url, {
  //         method: 'PATCH',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify( {
  //             location: location.delivery_location,
  //         } ),
  //     } )
  //         .then( ( res ) => res.json() )
  //         .then( ( location ) => {
  //             setIsLoading(false)
  //             setLocation( location );
  //         } )
  //         .catch( ( err ) => console.log( 'error: ', err ) );

  // };

  // function handleChange ( e ) {
  //     console.log( e.target.value );
  //     setLocation( { ...location, [ e.target.name ]: e.target.value } );
  // }

  return (
    <div id="hide-card" className="mt-[30px]">
      <div>
        <div>
          <form onSubmit={handleUpdateClick}>
            <label htmlFor="delivery_location" className="font-work m-2">
              Delivery Location
            </label>
            <br />
            <input
              type="text"
              placeholder="delivery location"
              name="delivery_location"
              onChange={handleInput}
              className="p-2 border-2 border-black font-work m-2"
            />
            <br />

            <button
              type="submit"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-[120px]"
            >
              {isLoading ? "Loading..." : "Submit Item"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
