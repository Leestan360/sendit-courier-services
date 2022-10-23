import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createPost = createAsyncThunk(
  "signup/createPost",
  async ( user ) => {
    let request = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
      })
    })
    let data = await request.json();
    console.log(request);
    console.log(data);
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
      signup: [],
      loading: false,
      error: null,
  },
//   reducers: {
//     signupInfo: (state, action) => {
//       state.value = action.payload;
//     },
//   },
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signupInfo } = signupSlice.actions;

export default signupSlice.reducer;
