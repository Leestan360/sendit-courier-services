import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using redux to login user by retrieving their information from the database
export const logoutUser = createAsyncThunk("logout/logoutUser", async () => {
  try {
    let request = await fetch("/logout", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        
        
        
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

export const logoutSlice = createSlice({
  name: "logout",
  initialState: {
    logoutState: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [logoutUser.pending]: (state, action) => {
      state.loading = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.logoutState = action.payload;
      state.loading = false;
    },
    [logoutUser.rejected]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.error = action.payload;
    },
  },
});


export const { logoutInfo } = logoutSlice.actions;

export default logoutSlice.reducer;



 
