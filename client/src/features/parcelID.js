import { createSlice } from "@reduxjs/toolkit";


export const parcelID = createSlice( {
    name: "parcelID",
    initialState: { value: 1 },
    reducers: {
        setParcelId: ( state, action ) => {
            state.value = action.payload;
        },
    },
} );

export const { setParcelId } = parcelID.actions;

export default parcelID.reducer;