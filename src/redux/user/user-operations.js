import { createAsyncThunk } from '@reduxjs/toolkit';
import server from 'api/basic';

export const getUserData = createAsyncThunk('user/getUserData', async (_, thunkAPI) => {
  try {
    const res = await server.get(`/user`);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const editUserInfo = createAsyncThunk('user/editUserInfo', async (obj, thunkAPI) => {
  try {
    const res = await server.patch(`/user/editing`, obj);
    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const editUserProfilePhoto = createAsyncThunk(
  'user/editingUserProfilePhoto',
  async (obj, thunkAPI) => {
    try {
      const res = await server.patch(`/user/editing/photo`, obj);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
