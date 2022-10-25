import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using redux to order order by retrieving their information from the database
export const setOrder = createAsyncThunk("order/setOrder", async (order) => {
  try {
    let request = await fetch("/order", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
            card_name:order.card_name,
            card_number:order.card_number,
            catergory: order.catergory,
            dropoff: order.dropoff,
            expiration_date:order.expiration_date,
            fragility:order.fragility,
            delivery_length:order.devivery_length,
            perishability:order.perishability,
            pickup:order.pickup,
            security_code:order.security_code,
            weight:order.weight,
            width:order.width,
        }),
      });
    let data = await request.json();
    console.log(request);
    if (request.ok) {
      //  console.log(data, "yes");
      return data;
    } else {
      // console.log(data, "no");
      return data;
    }
  } catch (error) {
    console.log(error);
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
