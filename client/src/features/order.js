import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using redux to order order by retrieving their information from the database
export const setOrder = createAsyncThunk("order/setOrder", async (order) => {
  try {
    let request = await fetch("http://localhost:3000/parcels", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type":"application/json",
        },
        body: JSON.stringify({
          category_type: order.category_type,
          delivery_location: order.delivery_location,
          expected_time:order.expected_time,
          fragility:order.fragility,
          perishable:order.perishable,
          pickup_location:order.pickup_location,
          weight:order.weight,
          user_id:order.user_id,
          expiration_date:order.expiration_date,
          card_name:order.card_name,
          card_number:order.card_number,
            security_code:order.security_code,
        }),
      });
    let data = await request.json();
    // console.log(request);
    if (request.ok) {
      //  console.log(data, "yes");
      return data;
    } else {
      // console.log(data, "no");
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
});

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderState: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [setOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [setOrder.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.orderState = action.payload;
      state.loading = false;
    },
    [setOrder.rejected]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { orderInfo } = orderSlice.actions;

export default orderSlice.reducer;
