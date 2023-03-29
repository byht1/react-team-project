import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  user: { name: null, email: null, phone: null, city: null, photo: null, birthday: null, posts: null },
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
        posts: payload.posts,
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
        posts: null,
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
    addUserPost(state, { payload }) {
      state.user.posts.push(payload);
    },
    removeUserPost(state, { payload }) {
      state.user.posts.splice(state.user.posts.indexOf(payload), 1)
    }
  },
});

export const { register, logout, updateUserInfo, addUserPost, removeUserPost } = authSlice.actions;
