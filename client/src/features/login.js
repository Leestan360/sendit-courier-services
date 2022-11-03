import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let formError = {errors:["","","","","","","","","","","","","","","","","",""]};
export let userData = null;

// using redux to login user by retrieving their information from the database
export const loginUser = createAsyncThunk("login/loginUser", async (user) => {
  try {
    let request = await fetch("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
    let data = await request.json();
    // console.log(request);
    if (request.ok) {
      //  console.log(data, "yes");
      userData = data;
      return data;
    } else {
      // console.log(data, "no");
      formError = data;
      return data;
    }
  } catch (error) {
    // console.log(error);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loginState: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loginState = action.payload;
      state.loading = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { loginInfo } = loginSlice.actions;

export default loginSlice.reducer;