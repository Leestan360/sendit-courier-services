import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using redux to login user by retrieving their information from the database
export const loginUser = createAsyncThunk("login", async (user) => {
  try {
    let request = await fetch("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });
    let data = await request.json();
    if (request.status === 200) {
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
      // console.log(action.payload);
      state.loginState = action.payload;
      state.loading = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { loginInfo } = loginSlice.actions;

export default loginSlice.reducer;
