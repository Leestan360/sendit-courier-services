import React, { useState } from 'react';
import axios from 'axios';

function Form ( { id, parcel } ) {

    const url = `/parcels/${ id }`;
    const [ formData, setFormData ] = useState( parcel );
    const [ isLoading, setIsLoading ] = useState( false );

    function submit ( e ) {
        e.preventDefault();
        setIsLoading( true );
        axios.patch( url, {
            delivery_location: formData.delivery_location
        } )
            .then( ( res ) => res.json() )
            .then( res => {
                setIsLoading( false );
                setFormData(res)
            } );
    }
    function handleChange ( e ) {
        setFormData( { ...formData, [ e.target.name ]: e.target.value } );
    }
    console.log( formData );
    return (
        <>

            <div>
                <div>

                    <form onSubmit={ submit }>
                        <form>
                            <label htmlFor="name">Delivery Location</label><br />
                            <input
                                type="text"
                                placeholder='delivery location'
                                name='delivery_location'
                                defaultValue={ parcel.delivery_location }
                                id="delivery_location"
                                onChange={ handleChange } />
                        </form><br />

                        <form>
                            <button type="submit">
                                { isLoading ? "Loading..." : "Submit Item" }
                            </button>
                        </form>
                    </form>
                </div>
            </div>

        </>
    );
}

export default Form;