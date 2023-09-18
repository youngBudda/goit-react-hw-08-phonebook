import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logOutThunk,
  refreshUserThunk,
} from './userThunks';

const initialState = {
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.userData = null;
        state.token = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.userData = action.payload;
      }),
});

export const userReducer = userSlice.reducer;
