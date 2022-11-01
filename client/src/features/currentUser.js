import { createSlice } from "@reduxjs/toolkit";


export const currentUserSlice = createSlice({
    name:"currentUser",
    initialState: { value:{} },
    reducers:{
        setCurrentUser:( state, action )=>{
            state.value = action.payload;
        },
    },
});

export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer