import React from "react";
import { useState, useEffect } from "react";

function Edit({ id, parcel }) {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     let request = await fetch(`/parcels/${id}`);
  //     let data = await request.json();
  //     console.log(data);
  //     setLocation(data);
  //   };
  //   getData();
  // }, [id]);

  function handleUpdateClick(e) {
    e.preventDefault();
    console.log(id);
    let url = `/parcels/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ location }),
    })
      .then((r) => r.json())
      .then((updateObj) => {
        console.log(updateObj);
          handleUpdate(updateObj);
      });
  }

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ [name]: value });
    setLocation({ [name]: value });
  };

  function handleUpdate(updateObj) {
    setLocation(updateObj);
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
    <div id="hide-card">
      <div>
        <div>
          <form onSubmit={handleUpdateClick}>
            <label htmlFor="delivery_location">Delivery Location</label>
            <br />
            <input
              type="text"
              placeholder="delivery location"
              name="delivery_location"
              onChange={handleInput}
              // defaultValue={ parcel.delivery_location }
              id="delivery_location"
              // value={ location }
            />
            <br />

            <button type="submit" className="btn">
              {isLoading ? "Loading..." : "Submit Item"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
