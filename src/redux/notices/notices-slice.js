import { createSlice } from '@reduxjs/toolkit';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    searchQuery: '',
  },
  reducers: {
    search(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { search } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
