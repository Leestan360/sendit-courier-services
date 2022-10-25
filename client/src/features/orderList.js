import { createSlice } from "@reduxjs/toolkit";


export const orderListSlice = createSlice({
    name:"orderList",
    initialState: { value:{} },
    reducers:{
        setOrderList:( state, action )=>{
            state.value = action.payload;
        },
        // disableNavbar:(state)=>{
        //     state.value = false;
        // }
    },
});

export const { setOrderList,disableNavbar } = orderListSlice.actions;

export default orderListSlice.reducer