import { createSlice } from '@reduxjs/toolkit';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    searchQuery: '',
    favoritesArray: [],
  },
  reducers: {
    search(state, action) {
      state.searchQuery = action.payload;
    },
    setFavorites(state, action) {
      if (!state.favoritesArray.includes(...action.payload)) {
        state.favoritesArray.push(...action.payload);
      }
    },
    addFavorite(state, action) {
      state.favoritesArray.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoritesArray.splice(state.favoritesArray.indexOf(action.payload), 1);
    },
  },
});

export const { search, setFavorites, addFavorite, removeFavorite } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
