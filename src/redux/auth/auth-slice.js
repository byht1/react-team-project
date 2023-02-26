import { createSlice } from '@reduxjs/toolkit';

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
    updateUserInfo(state, { payload }) {
      // eslint-disable-next-line
      state.id = state.id;
      state.user = {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        city: payload.city,
        photo: payload.photo,
        birthday: payload.birthday,
      }; // eslint-disable-next-line
      state.isLogin = state.isLogin; // eslint-disable-next-line
      state.access_token = state.access_token; // eslint-disable-next-line
      state.refresh_token = state.refresh_token;
    },
  },
});

export const { register, logout, updateUserInfo } = authSlice.actions;
