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
      if (!action.payload.some(item => state.favoritesArray.includes(item))) {
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
      if (!action.payload.some(item => state.ownArray.includes(item))) {
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
