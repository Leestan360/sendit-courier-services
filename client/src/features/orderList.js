import { createSlice } from "@reduxjs/toolkit";


export const orderListSlice = createSlice({
    name:"orderList",
    initialState: { value:{} },
    reducers:{
        setOrderList:( state, action )=>{
            state.value = action.payload;
        },
    },
});

export const { setOrderList } = orderListSlice.actions;

export default orderListSlice.reducer