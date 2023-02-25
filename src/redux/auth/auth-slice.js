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
  extraReducers: {
    [getUserData.pending]: handlePending,
    [getUserData.rejected]: handleRejected,
    [getUserData.fulfilled](state, action) {
      state.loading = false;
      state.error = null;
      state.id = action.payload._id;
      state.user = {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        city: action.payload.city,
        photo: action.payload.photo,
        birthday: action.payload.birthday,
      };
    },
    [editUserProfilePhoto.pending]: handlePending,
    [editUserProfilePhoto.rejected]: handleRejected,
    [editUserProfilePhoto.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user.photo = action.payload.photo;
    },
  },
});

export const { register, logout } = authSlice.actions;
