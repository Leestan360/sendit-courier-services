import React from 'react'
import Form from './Form';
import { useState } from 'react';

function Edit ({id, parcel}) {
    const [ isedit, setEditing ] = useState( false );

    function handleChange ( e ) {
        e.preventDefault();
        if ( e )
        {
            setEditing( () => !isedit );
        }
        console.log( e.target.id );
        fetch( `/parcels/${ e.target.id }`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        } )
            .then( ( r ) => r.json() );

    }

  return (
      <div id='hide-card'>

          { isedit ? <Form id={ id } parcel={ parcel } /> : <button className='edit-btn' onClick={ handleChange } id={ id }>Edit</button> }
      </div>
  )
}

export default Edit