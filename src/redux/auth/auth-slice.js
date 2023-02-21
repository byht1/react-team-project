import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  user: { name: null, email: null, phone: null, city: null },
  access_token: null,
  refresh_token: null,
  isLoggin: false,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, { payload }) {
      state.id = payload._id;
      state.user = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
      };

      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
      state.isLoggin = true;
    },
  },
});

export const { register } = authSlice.actions;
