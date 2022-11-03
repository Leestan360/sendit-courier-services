import { createSlice } from "@reduxjs/toolkit";


export const toggleSlice = createSlice({
    name:"toggle",
    initialState: { value:true },
    reducers:{
        toggleNavbar:( state, action )=>{
            state.value = action.payload;
        },
        disableNavbar:(state)=>{
            state.value = false;
        }
    },
});

export const { toggleNavbar,disableNavbar } = toggleSlice.actions;

export default toggleSlice.reducer