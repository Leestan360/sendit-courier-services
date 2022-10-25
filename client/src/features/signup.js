import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using redux to post user signup details to the database
export const createPost = createAsyncThunk(
  "signup/createPost",
  async (user) => {
    try {
      let request = await fetch("/logout", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone_number: user.phone_number,
          password: user.password,
          password_confirmation: user.password_confirmation,
        }),
      });
      let data = await request.json();
      console.log(request);
      if (request.ok) {
        //  console.log(data, "yes");
         return data;
      } else {
        // console.log(data, "no");
        return data
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    signupState: {},
    loading: false,
    error: null,
  },
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.signupState = action.payload;
      state.loading = false;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      // console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const { signupInfo } = signupSlice.actions;

export default signupSlice.reducer;
