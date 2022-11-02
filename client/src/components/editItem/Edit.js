import React from 'react';
import { useState } from 'react';

function Edit ( { id, parcel } ) {
    const [ location, setLocation ] = useState( parcel );
    const [ isLoading, setIsLoading ] = useState( false );
    const url = `/parcels/${ id }`;

    const handleSubmit = ( e ) => {
        e.preventDefault();
        updateProduct();
    };

    const updateProduct = () => {
        fetch( url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                location: location.delivery_location,
            } ),
        } )
            .then( ( res ) => res.json() )
            .then( ( location ) => {
                setIsLoading(false)
                setLocation( location );
            } )
            .catch( ( err ) => console.log( 'error: ', err ) );

    };

    function handleChange ( e ) {
        console.log( e.target.value );
        setLocation( { ...location, [ e.target.name ]: e.target.value } );
    }

    return (
        <div id='hide-card'>

            <div>
                <div>

                    <form onSubmit={ handleSubmit }>
                        <label htmlFor="delivery_location">Delivery Location</label><br />
                        <input
                            type="text"
                            placeholder='delivery location'
                            name='delivery_location'
                            defaultValue={ parcel.delivery_location }
                            id="delivery_location"
                            value={ location }
                            onChange={ handleChange } />
                        <br />

                        <button type="submit" className='btn'>
                            { isLoading ? "Loading..." : "Submit Item" }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;