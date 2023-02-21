import { createAsyncThunk } from '@reduxjs/toolkit';
import server from 'api/basic';

//Get all notices @ /notices
export const fetchAll = createAsyncThunk('notices/fetchAll', async (_, thunkAPI) => {
  try {
    const r = await server.get('/notices');
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Get one notice @ /notices
export const fetchOne = createAsyncThunk('notices/fetchOne', async (noticeId, thunkAPI) => {
  try {
    const r = await server.get(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Remove notice

export const remove = createAsyncThunk('notices/remove', async (noticeId, thunkAPI) => {
  try {
    const r = await server.delete(`/notices/${noticeId}`);
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Add to favorites

export const addToFav = createAsyncThunk('notices/addToFav', async (noticeId, thunkAPI) => {
  try {
    const r = await server.patch(`/notices/${noticeId}/favorite`);
    return r.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Remove from favorites

export const removeFromFav = createAsyncThunk(
  'notices/removeFromFav',
  async (noticeId, thunkAPI) => {
    try {
      const r = await server.delete(`/notices/${noticeId}/favorite`);
      return r.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
