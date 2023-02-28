import { createSlice } from '@reduxjs/toolkit';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    searchQuery: '',
    favoritesArray: [],
    ownArray: [],
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
      state.favoritesArray.unshift(action.payload);
    },
    removeFavorite(state, action) {
      state.favoritesArray.splice(state.favoritesArray.indexOf(action.payload), 1);
    },
    setOwn(state, action) {
      if (!state.ownArray.includes(...action.payload)) {
        state.ownArray.push(...action.payload);
      }
    },
    removeOwn(state, action) {
      state.ownArray.splice(state.ownArray.indexOf(action.payload), 1);
    },
  },
});

export const { search, setFavorites, addFavorite, removeFavorite, setOwn, removeOwn } =
  noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
