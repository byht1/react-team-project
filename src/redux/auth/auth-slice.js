import { createSlice } from '@reduxjs/toolkit';
import { getUserData, editUserProfilePhoto } from './user-operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  id: null,
  user: { name: null, email: null, phone: null, city: null, photo: null, birthday: null },
  isLogin: false,
  // isRefreshing: false,
  loading: false,
  refresh_token: null,
  access_token: null,
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
        photo: payload.photo,
        birthday: payload.birthday,
      };
      state.isLogin = true;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
    },
    logout(state) {
      state.id = null;
      state.user = {
        name: null,
        email: null,
        phone: null,
        city: null,
        photo: null,
        birthday: null,
      };
      state.isLogin = false;
      state.access_token = null;
      state.refresh_token = null;
    },
  },
});

export const { register, logout } = authSlice.actions;
